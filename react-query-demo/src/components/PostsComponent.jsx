import { useQuery, useQueryClient } from '@tanstack/react-query'

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) throw new Error('Network error')
  return res.json()
}

export default function PostsComponent() {
  const queryClient = useQueryClient()

  // useQuery handles loading, caching, background refetches, etc.
  const {
    data,
    error,
    isLoading,      // initial load pending
    isFetching,     // any background refetch
    refetch,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    // you can override options per-query if you want
    // staleTime: 30_000,
  })

  const prefetch = () =>
    queryClient.prefetchQuery({
      queryKey: ['posts'],
      queryFn: fetchPosts,
    })

  const invalidate = () =>
    queryClient.invalidateQueries({ queryKey: ['posts'] })

  if (isLoading) return <p>Loading posts…</p>
  if (error) return <p style={{ color: 'crimson' }}>Error: {error.message}</p>

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 12 }}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <h2 style={{ margin: 0 }}>Posts</h2>
        {isFetching ? <span>⏳ refreshing…</span> : null}
      </div>

      <div style={{ display: 'flex', gap: 8, margin: '12px 0' }}>
        <button onClick={() => refetch()}>Manual Refetch</button>
        <button onClick={prefetch}>Prefetch (warm cache)</button>
        <button onClick={invalidate}>Invalidate (force refresh next)</button>
      </div>

      <ul>
        {data.slice(0, 10).map((p) => (
          <li key={p.id}>
            <strong>#{p.id}</strong> {p.title}
          </li>
        ))}
      </ul>
      <p style={{ opacity: 0.8 }}>
        Showing first 10 from <code>/posts</code>.
      </p>
    </div>
  )
}