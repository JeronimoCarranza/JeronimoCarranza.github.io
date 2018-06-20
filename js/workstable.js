var filtersConfig = {
    base_path: '/js/tablefilter/',
    responsive: true,
    col_widths: ['60px', '350px', '250px','100px'],
    /** Bootstrap integration */
    //  allows Bootstrap table styling
    themes: [{
        name: 'transparent'
    }],
	// grid layout customisation
    grid_layout: {
        width: '780px',
        height: '340px',
        filters: false,
    },
};

var tf = new TableFilter(document.querySelector("table"), filtersConfig);
tf.init();
