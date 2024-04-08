const extensions: any = {
  JVBERi0: "pdf",
  R0lGODdh: "gif",
  R0lGODlh: "gif",
  iVBORw0KGgo: "png",
  "/9j/": "jpg",
};

export const detectExtension = (b64: string | undefined) => {
  if (!Boolean(b64)) {
    return null;
  }
  for (let s in extensions) {
    if (b64!.startsWith(s)) {
      return extensions[s];
    }
  }
};

export const toBase64 = async (file: any): Promise<string | undefined> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let encoded = reader.result?.toString().replace(/^data:(.*,)?/, "");
      if (encoded)
        if (encoded.length % 4 > 0) {
          //Extracts the content in the beginning (the metadata of base64)
          encoded += "=".repeat(4 - (encoded.length % 4));
        }
      resolve(encoded);
    };
    reader.onerror = () => reject("error");
  });
