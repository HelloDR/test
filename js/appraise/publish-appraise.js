/**
 * Created by 15345 on 2018/11/13.
 */
// $(function () {
//     //上传文件信息
//     $('#doc-form-file').on('change', function() {
//         var fileNames = '';
//         $.each(this.files, function() {
//             fileNames += '<span>' + this.name + '</span> ';
//         });
//         $('#file-list').html(fileNames);
//     });
// });
// 图片上传
$(function () {
    //var files=[];
    var that = this;
    $("#upload").click(function(){
        $("#file").trigger("click");
    });

    $("#file").change(function(){
        document.getElementById("gallery").innerHTML="";
        var img=document.getElementById("file").files;
        var div=document.createElement("div");
        for(var i=0;i<img.length;i++){
            var file=img[i]; var url=URL.createObjectURL(file);
            var box=document.createElement("img");
            box.setAttribute("src",url);
            box.className='upload-img';

            var imgBox=document.createElement("div");
            imgBox.style.display='inline-block';
            imgBox.className='img-item';
            $(imgBox).hover(function () {
                $("#delete_btn").stop(true).show();
            },function () {
                $("#delete_btn").stop(true).hide();
            });

            var deleteIcon = document.createElement("span");
            deleteIcon.className = 'delete';
            //deleteIcon.innerText = 'x';
            //deleteIcon.className='am-icon am-icon-trash';
            deleteIcon.id='delete_btn';
            deleteIcon.dataset.filename = img[i].name;
            imgBox.appendChild(deleteIcon);

            imgBox.appendChild(box);
            var body=document.getElementsByClassName("gallery")[0];
            body.appendChild(imgBox);

            that.files = img;
            $(deleteIcon).click(function () {
                var filename = $(this).data("filename");
                $(this).parent().remove();
                var fileList = Array.from(that.files);

                for(var j=0;j<fileList.length;j++){
                    if(fileList[j].name = filename){
                        fileList.splice(j,1);
                        break;
                    }
                }
                that.files = fileList
            })
        }
    });
});
