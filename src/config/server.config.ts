import {readFileSync} from "node:fs";
import path from "node:path";

const certPath = path.join(process.cwd(), "config", "certs");

export const httpsOptions = {
    key: readFileSync(path.join(certPath, "server.key")),
    cert: readFileSync(path.join(certPath, "server.crt"))
}
export const httpPort: number = 8080;
export const httpsPort: number = 443;