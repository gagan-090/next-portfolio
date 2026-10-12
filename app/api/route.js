// Health check (replaces the old Express /api endpoint).
export function GET() {
  return Response.json({
    status: 'success',
    message: 'Welcome to Gagan Shukla Blog API',
    version: '2.0.0',
    timestamp: new Date().toISOString(),
  });
}
