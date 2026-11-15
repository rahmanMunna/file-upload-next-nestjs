# file-upload-next-nestjs
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