/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
module.exports = {
    images: {
      remotePatterns: [
        {
          hostname: 'dummyimage.com', 
        },
      ],
    },
}
// module.exports = {
//     compiler: {
//       // Enables the styled-components SWC transform
//       styledComponents: true
//     }
//   }