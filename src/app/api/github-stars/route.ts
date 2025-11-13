export async function GET(req: Request) {
  const res = await fetch(
    'https://api.github.com/repos/suriyasingaravel/portfolio',
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    }
  );

  if (!res.ok) {
    return new Response('Failed to fetch stars', { status: res.status });
  }

  const data = await res.json();
  console.log(data);
  return Response.json({ stars: data.stargazers_count });
}
