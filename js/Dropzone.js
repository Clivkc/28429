document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var file = document.getElementById('fileToUpload').files[0];
    var formData = new FormData();
    formData.append('file', file);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/upload.php', true);
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log('文件上传成功');
        } else {
            console.error('文件上传失败');
        }
    };
    xhr.send(formData);
});