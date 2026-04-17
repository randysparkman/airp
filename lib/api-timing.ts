/**
 * Shared timing/usage logger for API routes.
 *
 * Emits a single-line `[timing]` log that is easy to grep in Vercel logs.
 * Format:
 *   [timing] route=<name> elapsed=<ms> model=<ms> in=<n> out=<n> cache_read=<n> cache_write=<n>
 */

type AnthropicUsage = {
  input_tokens?: number;
  output_tokens?: number;
  cache_creation_input_tokens?: number | null;
  cache_read_input_tokens?: number | null;
};

export function logApiTiming(args: {
  route: string;
  startedAt: number;
  modelElapsedMs: number;
  usage?: AnthropicUsage | null;
  extra?: Record<string, string | number>;
}) {
  const elapsed = Date.now() - args.startedAt;
  const u = args.usage ?? {};
  const parts = [
    `route=${args.route}`,
    `elapsed=${elapsed}ms`,
    `model=${args.modelElapsedMs}ms`,
    `in=${u.input_tokens ?? 0}`,
    `out=${u.output_tokens ?? 0}`,
    `cache_read=${u.cache_read_input_tokens ?? 0}`,
    `cache_write=${u.cache_creation_input_tokens ?? 0}`,
  ];
  if (args.extra) {
    for (const [k, v] of Object.entries(args.extra)) {
      parts.push(`${k}=${v}`);
    }
  }
  console.log(`[timing] ${parts.join(" ")}`);
}
