/**
 * Tinymce-v5-base64-image-insert
 *
 * @author    Matěj Půhoný
 * @link      https://puhony.eu/
 *
 */
tinymce.PluginManager.add("base64_image_insert", function(editor, f) {
    function _onAction() {
        _dialog = editor.windowManager.open({
            title: 'Insert Image',
            onSubmit: function (api) {
                if (api.getData().dropzone[0].size > 1024 * 1024) {
                    alert("Your image have more then 1MB, consider using this image. (It's too big)");
                }

                const classFilereader = new FileReader();
                classFilereader.onload = function(base64) {
                    const imgData = base64.target.result;
                    const img = new Image();
                    img.src = imgData;

                    editor.insertContent("<img src='" + imgData + "' height='200px'/>");
                    api.close()
                };

                classFilereader.onerror = function(err) {
                    alert("Error reading file - " + err.getMessage());
                };

                classFilereader.readAsDataURL(api.getData().dropzone[0]);
            },
            body: {
                type: 'panel',
                items: [
                    {
                        type: 'dropzone',
                        name: 'dropzone',
                        label: 'Dropzone',
                    }
                ]
            },
            buttons: [
                {
                    text: 'Close',
                    type: 'cancel',
                    onclick: 'close'
                },
                {
                    text: 'Insert',
                    type: 'submit',
                    primary: true,
                }
            ]
        });
    }

    editor.ui.registry.addButton("base64_image_insert", {
        text: '',
        tooltip: 'Insert embedded image',
        onAction: _onAction,
        icon: 'image',
    });


    editor.ui.registry.addMenuItem("base64_image_insert", {
        text: '',
        context: 'insert',
        icon: 'image',
        onAction: _onAction
    });


});
