import { NextResponse } from "next/server";

const RSS_URL = "https://anchor.fm/s/ed1344d8/podcast/rss";

function decodeXml(value = "") {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([a-f\d]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<")
    .replace(/&amp;/g, "&");
}

function tag(xml: string, name: string) {
  const match = xml.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${name}>`, "i"));
  return decodeXml(match?.[1]?.trim());
}

function attribute(xml: string, tagName: string, attributeName: string) {
  const match = xml.match(new RegExp(`<${tagName}\\b[^>]*\\b${attributeName}=["']([^"']+)["'][^>]*>`, "i"));
  return decodeXml(match?.[1]?.trim());
}

function plainText(value: string) {
  return decodeXml(value.replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ")
    .trim();
}

export async function GET() {
  try {
    const response = await fetch(RSS_URL, {
      next: { revalidate: 900 },
      headers: { "User-Agent": "ParaglidingAtlas.com podcast reader" },
    });

    if (!response.ok) throw new Error(`RSS request returned ${response.status}`);

    const xml = await response.text();
    const channelHeader = xml.split("<item>")[0];
    const episodes = Array.from(xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)).map(
      ([, item], index) => {
        const description = tag(item, "description");
        return {
          id: tag(item, "guid") || String(index),
          title: tag(item, "title"),
          description: plainText(description),
          publishedAt: tag(item, "pubDate"),
          duration: tag(item, "itunes:duration"),
          audioUrl: attribute(item, "enclosure", "url"),
          image:
            attribute(item, "itunes:image", "href") ||
            attribute(channelHeader, "itunes:image", "href"),
          episodeUrl: tag(item, "link"),
        };
      },
    );

    return NextResponse.json({
      title: tag(channelHeader, "title"),
      image: attribute(channelHeader, "itunes:image", "href"),
      episodes,
    });
  } catch (error) {
    console.error("Unable to load podcast RSS feed", error);
    return NextResponse.json(
      { error: "The podcast feed is temporarily unavailable." },
      { status: 502 },
    );
  }
}
