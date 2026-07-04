import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const sourceExtensions = /\.(png|jpe?g)$/i;
const converted = [];

async function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const inputPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      if (entry.name.toLowerCase() === "backup") continue;
      await walk(inputPath);
      continue;
    }

    if (!sourceExtensions.test(entry.name)) continue;

    const outputPath = inputPath.replace(sourceExtensions, ".webp");
    const inputBytes = fs.statSync(inputPath).size;

    await sharp(inputPath)
      .webp({
        quality: 84,
        alphaQuality: 100,
        effort: 6,
        smartSubsample: true,
      })
      .toFile(outputPath);

    converted.push({
      inputPath,
      outputPath,
      inputBytes,
      outputBytes: fs.statSync(outputPath).size,
    });
  }
}

await walk("public");

const inputBytes = converted.reduce((total, file) => total + file.inputBytes, 0);
const outputBytes = converted.reduce((total, file) => total + file.outputBytes, 0);

console.log(`Converted ${converted.length} images.`);
console.log(`Before: ${(inputBytes / 1024 / 1024).toFixed(2)} MB`);
console.log(`After: ${(outputBytes / 1024 / 1024).toFixed(2)} MB`);
console.log(`Reduction: ${((1 - outputBytes / inputBytes) * 100).toFixed(1)}%`);
