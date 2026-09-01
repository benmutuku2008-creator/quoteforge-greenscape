export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
EOFgit add app/layout.tsx
git commit -m "fix: add root layout.tsx for Next.js 14 app router - fixes Vercel build"
git push origin main
ls app/
cd "/Users/macbookair/Desktop/ISTHISPOSSIBLE.AI PROJECT/quoteforge-repo"
cat > app/layout.tsx << 'EOF'
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"><body>{children}</body></html>
  )
}
