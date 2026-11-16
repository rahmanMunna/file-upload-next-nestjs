# file-upload-next-nestjs

A practice project: upload and validate images with NestJS (Multer), save them to disk with a unique name, and map each image to a `food`.

## Project structure

```
.
├── backend/    # NestJS API (current)
└── frontend/   # Next.js app (coming later)
```

## Prerequisites

- Node.js 20 or newer (developed on v24)
- npm

## Setup (backend)

```bash
cd backend
npm install
npm run start:dev
```

The API runs at http://localhost:3000 (set `PORT` to change it).

### Quick test

```bash
# list foods
curl http://localhost:3000/foods

# upload an image (form field name must be "image")
curl -F "image=@/path/to/pic.png" http://localhost:3000/foods/upload
```

Uploaded files are saved in `backend/uploads/` (created automatically).

### Useful scripts

| Command | What it does |
| --- | --- |
| `npm run start:dev` | Start with watch mode |
| `npm run build` | Compile to `dist/` |
| `npm run start:prod` | Run the compiled app |
| `npm run lint` | Lint with oxlint |
| `npm test` | Run unit tests (vitest) |

### Troubleshooting

- `Namespace 'global.Express' has no exported member 'Multer'`: make sure `@types/multer` is installed and `"multer"` is in the `types` array in `backend/tsconfig.json`.

## Notes
- FileInterceptor() prepares and processes the uploaded file.
- @UploadedFile() retrieves the result of that processing and injects it into your controller method.

### Because @UploadedFile() is just a parameter decorator. It doesn't process multipart requests or save uploaded files.

```
It tells NestJS:

"Give me the uploaded file that was already processed and attached to the request."

But who processes it?

That's the job of FileInterceptor.
```

### FormData key → FileInterceptor → Multer processing → @UploadedFile() → Controller.