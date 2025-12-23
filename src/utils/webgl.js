let isSupported = null;

export const isWebGLSupported = () => {
  if (isSupported !== null) return isSupported;
  try {
    const canvas = document.createElement("canvas");
    isSupported = !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
    return isSupported;
  } catch (e) {
    isSupported = false;
    return false;
  }
};

export const getWebGLErrorMessage = () => {
  const names = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
  let context = null;

  for (let i = 0; i < names.length; i++) {
    try {
      const canvas = document.createElement("canvas");
      context = canvas.getContext(names[i]);
      if (context && typeof context.getParameter === "function") {
        return null; // WebGL is supported
      }
    } catch (e) {
      // Continue to next context name
    }
  }

  return "WebGL is not supported by your browser.";
};
