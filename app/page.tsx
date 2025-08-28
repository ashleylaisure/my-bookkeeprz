
export default function Homepage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center space-y-6 p-8">
      <h1>Bright & Crisp Theme</h1>
      <p>
        This theme uses a modern color system with clean typography. 
        <strong> Bold text</strong>, <em>italic</em>, <small>muted text</small>.
      </p>

      <div className="card p-6 max-w-md">
        <h3>Example Card</h3>
        <p className="mt-2 text-muted-foreground">
          A reusable UI card with hover shadow.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-accent">Accent</button>
          <button className="btn btn-outline">Outline</button>
          <button className="btn btn-muted">muted</button>
        </div>
      </div>
    </main>
  )
}