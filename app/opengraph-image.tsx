import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'Muhammad Idrees - Creative Developer & Front-End Expert'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  // Font
  const interBold = fetch(
    new URL('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap')
  ).then(res => res.arrayBuffer())

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(to bottom right, #8b5cf6, #3b82f6)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '40px',
        }}
      >
        <div 
          style={{ 
            fontSize: '48px', 
            fontWeight: 'bold',
            opacity: 0.8,
            marginBottom: '20px'
          }}
        >
          Hello, I'm
        </div>
        <div style={{ fontSize: '72px', fontWeight: 'bold', marginBottom: '20px' }}>
          Muhammad Idrees
        </div>
        <div style={{ fontSize: '36px', opacity: 0.9, maxWidth: '800px', textAlign: 'center' }}>
          Creative Developer & Front-End Expert
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
} 