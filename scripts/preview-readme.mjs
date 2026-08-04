import { readFileSync, writeFileSync } from 'node:fs'
import { execSync } from 'node:child_process'
import { createServer } from 'node:http'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const readme = readFileSync(join(root, 'README.md'), 'utf8')

const body = execSync('npx --yes marked --gfm', {
  input: readme,
  cwd: root,
  encoding: 'utf8',
})

const page = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Preview README — marianehds</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.8.1/github-markdown-light.min.css"
    media="(prefers-color-scheme: light)"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.8.1/github-markdown-dark.min.css"
    media="(prefers-color-scheme: dark)"
  />
  <style>
    body {
      margin: 0;
      background: #ffffff;
    }

    @media (prefers-color-scheme: dark) {
      body {
        background: #0d1117;
      }
    }

    .markdown-body {
      box-sizing: border-box;
      min-width: 200px;
      max-width: 980px;
      margin: 0 auto;
      padding: 45px;
    }

    .preview-banner {
      position: sticky;
      top: 0;
      z-index: 10;
      padding: 0.75rem 1rem;
      text-align: center;
      font: 14px/1.4 system-ui, sans-serif;
      color: #831843;
      background: #fce7f3;
      border-bottom: 1px solid #f9a8d4;
    }

    @media (prefers-color-scheme: dark) {
      .preview-banner {
        color: #fce7f3;
        background: #500724;
        border-bottom-color: #9d174d;
      }
    }
  </style>
</head>
<body>
  <div class="preview-banner">
    Preview local do README — ainda não foi pro GitHub
  </div>
  <article class="markdown-body">
${body}
  </article>
</body>
</html>`

writeFileSync(join(root, '.readme-preview.html'), page)

const port = 4174

createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    res.end(page)
    return
  }

  res.writeHead(404)
  res.end('Not found')
}).listen(port, () => {
  console.log('')
  console.log('  Preview do README aberto em:')
  console.log(`  http://localhost:${port}`)
  console.log('')
  console.log('  Edite README.md e rode npm run preview:readme de novo')
  console.log('  Ctrl+C para parar')
  console.log('')
})
