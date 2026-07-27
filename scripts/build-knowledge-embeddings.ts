import fs from "fs";
import path from "path";
import OpenAI from "openai";

const KB_DIR = path.join(process.cwd(), "src/features/chat/knowledge/kb");
const OUTPUT_FILE = path.join(
  process.cwd(),
  "src/features/chat/knowledge/embeddings.json",
);
const EMBEDDING_MODEL = "text-embedding-3-small";

interface Chunk {
  source: string;
  heading: string;
  text: string;
}

interface EmbeddedChunk extends Chunk {
  embedding: number[];
}

function chunkMarkdown(source: string, markdown: string): Chunk[] {
  const sections = markdown.split(/\n(?=##? )/g);
  return sections
    .map((section) => {
      const headingMatch = section.match(/^##?\s+(.+)$/m);
      const heading = headingMatch ? headingMatch[1].trim() : source;
      return { source, heading, text: section.trim() };
    })
    .filter((chunk) => chunk.text.length > 0);
}

async function main() {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is not set");
  }

  const client = new OpenAI({ apiKey });

  const files = fs.readdirSync(KB_DIR).filter((f) => f.endsWith(".md"));
  const chunks: Chunk[] = files.flatMap((file) => {
    const markdown = fs.readFileSync(path.join(KB_DIR, file), "utf-8");
    return chunkMarkdown(file, markdown);
  });

  console.log(`Embedding ${chunks.length} chunks from ${files.length} files...`);

  const embedded: EmbeddedChunk[] = [];
  for (const chunk of chunks) {
    const response = await client.embeddings.create({
      model: EMBEDDING_MODEL,
      input: chunk.text,
    });
    embedded.push({ ...chunk, embedding: response.data[0].embedding });
    console.log(`  embedded: ${chunk.source} — ${chunk.heading}`);
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(embedded, null, 2));
  console.log(`Wrote ${embedded.length} embeddings to ${OUTPUT_FILE}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
