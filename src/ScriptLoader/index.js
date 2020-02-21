export const ScriptLoader = (...src) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.type = 'babel';
    document.body.appendChild(script);
};

export default ScriptLoader(
    [
        '../../../assets/web/js/demo.js',
        '../../../assets/web/js/imagesloaded.pkgd.min',
    ]);
