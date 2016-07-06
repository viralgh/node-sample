$(document).ready(function() {
    $('#country_list').DataTable({
       'aoColumnDefs': [{
            'bSortable': false,
            'aTargets': [-1,-2] /* 1st one, start by the right */
        }],
        'fnDrawCallback': function(){
            $('.edit').click(function(){
                $id = $(this).data('id');
                location.href = 'country/edit'+'/'+$id;
                return false;
            });

            $('.delete').click(function(){
                $id = $(this).data('id');
                sure = confirm('Are you sure?');
                if(sure)
                {
                    location.href = 'country/delete'+'/'+$id;
                }
                return false;
            });
        }
    });

   
});