function savePluginDocs(button) {
	var parent = jQuery(jQuery(button).parents('.plugin_docs')[0]);
	jQuery.post(ajaxurl,
		{
			action: 'save_plugin_docs',
			file: parent.attr('data'),
			notes: parent.children('textarea').val()
		},
		function(response) {
			if (response != '1') {
				console.log(response);
				alert('Error: Not Saved');
			}
		}
	);
	return false;
}