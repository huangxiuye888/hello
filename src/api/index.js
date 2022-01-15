function importAll(files) {
    const caches = {};
    files.keys().forEach((file) => {
      const modules = files(file);
      Object.keys(modules).forEach((item) => {
        if (caches[item]) {
          throw new Error(`${item}重复，请仔细检查`);
        } else {
          caches[item] = modules[item];
        }
      });
    });
    return caches;
  }
  
  export default importAll(require.context("./modules", true, /\.js/));
  