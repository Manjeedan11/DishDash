export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="max-w-screen-xl mx-auto px-50 py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Dish Dash. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={import.meta.env.VITE_GITHUB_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58 0-.28-.01-1.02-.01-2-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.73.08-.73 1.22.09 1.87 1.25 1.87 1.25 1.08 1.86 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.63-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1-.32 3.3 1.22.95-.26 1.96-.39 2.96-.39s2.01.13 2.96.39c2.3-1.54 3.3-1.22 3.3-1.22.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.46 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.22.69.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span className="sr-only">GitHub</span>
            </a>

            <a
              href={import.meta.env.VITE_LINKEDIN_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.67 3H4.33A1.34 1.34 0 0 0 3 4.33v15.33A1.34 1.34 0 0 0 4.33 21h15.33A1.34 1.34 0 0 0 21 19.67V4.33A1.34 1.34 0 0 0 19.67 3ZM7.52 18H4.91V9h2.61v9ZM6.22 7.72a1.52 1.52 0 1 1 0-3 1.52 1.52 0 0 1 0 3Zm12.28 10.28h-2.61v-4.6c0-1.1-.02-2.52-1.54-2.52s-1.78 1.21-1.78 2.45v4.67h-2.61V9h2.51v1.23h.03a2.75 2.75 0 0 1 2.48-1.36c2.66 0 3.15 1.75 3.15 4v5.14Z" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>

            <a
              href={import.meta.env.VITE_INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0-2A7.75 7.75 0 0 0 0 7.75v8.5A7.75 7.75 0 0 0 7.75 24h8.5A7.75 7.75 0 0 0 24 16.25v-8.5A7.75 7.75 0 0 0 16.25 0h-8.5Zm4 5.5A6.5 6.5 0 1 1 5.5 12 6.51 6.51 0 0 1 11.75 5.5Zm0 2A4.5 4.5 0 1 0 16.25 12a4.5 4.5 0 0 0-4.5-4.5ZM18 4.75a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 18 4.75Z" />
              </svg>
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
