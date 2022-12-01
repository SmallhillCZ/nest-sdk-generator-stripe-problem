export async function request(
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
  uri: string,
  body: unknown,
  query: Record<string, string>,
): Promise<any> {
  console.log('HTTP REQUEST:', ...arguments);
}
