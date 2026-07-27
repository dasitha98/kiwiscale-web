import OpenAI from "openai";
import embeddedChunks from "./embeddings.json";

const EMBEDDING_MODEL = "text-embedding-3-small";
const TOP_K = 4;

interface EmbeddedChunk {
  source: string;
  heading: string;
  text: string;
  embedding: number[];
}

const chunks = embeddedChunks as EmbeddedChunk[];

function cosineSimilarity(a: number[], b: number[]): number {
  let dot = 0;
  let magA = 0;
  let magB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    magA += a[i] * a[i];
    magB += b[i] * b[i];
  }
  return dot / (Math.sqrt(magA) * Math.sqrt(magB));
}

export async function retrieveContext(
  client: OpenAI,
  query: string,
): Promise<string> {
  if (chunks.length === 0) return "";

  const response = await client.embeddings.create({
    model: EMBEDDING_MODEL,
    input: query,
  });
  const queryEmbedding = response.data[0].embedding;

  const ranked = chunks
    .map((chunk) => ({
      chunk,
      score: cosineSimilarity(queryEmbedding, chunk.embedding),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, TOP_K);

  return ranked.map(({ chunk }) => chunk.text).join("\n\n---\n\n");
}
