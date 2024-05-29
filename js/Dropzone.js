Dropzone.options.myDropzone = {
    paramName: "file", // 上传文件的参数名
    maxFilesize: 100, // 限制文件大小，单位为MB
    acceptedFiles: ".jpg,.png,.gif", // 允许的文件类型
    init: function() {
        this.on("success", function(file, response) {
            console.log(response); // 上传成功后的响应数据
        });
    }
};