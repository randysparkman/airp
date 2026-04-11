/**
 * Extract JSON from Claude's response text, handling optional markdown code fences.
 */
export function parseAIJson(textContent: string): any {
  const jsonMatch = textContent.match(/```(?:json)?\s*([\s\S]*?)```/) || [null, textContent];
  return JSON.parse(jsonMatch[1]!.trim());
}
