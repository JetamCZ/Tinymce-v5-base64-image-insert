# Tinymce-v5-base64-image-insert

This plugin is for Tinymce editor version 5. You can add image upload that will insert image as base64 image. Plugin doesn't require any external storage

## How to use this plugin?
1) Import this script
```
<script src="/js/tinymce-plugin-base64insert.js"></script>
```
2) Add plugin to tinymce init
```
<script>
    tinymce.init({
        selector: 'textarea#text',
        menubar: false,
        toolbar: 'undo redo | formatselect | bold italic underline link | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | code removeformat | media base64_image_insert',
        plugins: [
            'table', 'paste', 'wordcount', 'code', 'lists', 'advlist', 'link', 'media', 'base64_image_insert'
        ],
        advlist_bullet_styles: 'square',
        advlist_number_styles: 'lower-alpha,lower-roman,upper-alpha,upper-roman',
        enable_caption: true,
        language: 'cs',
        extended_valid_elements: 'a[href|target|target=_blank]',
    });
</script>
```





This plugin was build based on plugin called `https://github.com/buddyexpress/bdesk_photo` and `martyf/tinymce-5-plugin-playground` https://github.com/martyf/tinymce-5-plugin-playground
