import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    // 홈 디렉터리에 다른 package-lock.json이 있어 워크스페이스 루트 추론이 어긋난다
    root: path.join(__dirname),
  },
};

export default nextConfig;
