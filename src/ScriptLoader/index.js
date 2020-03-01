export const ScriptLoader = () => {
    const src = [
        '../assets/admin/vendor/jquery/jquery.min.js',
        '../assets/admin/vendor/popper.js/umd/popper.min.js',
        '../assets/admin/vendor/bootstrap/js/bootstrap.min.js',
    ];
    src.filter((item) => {
        const script = document.createElement("script");
        script.src = item;
        script.async = true;
        script.type = 'babel';
        document.body.appendChild(script);
    })
};


