
// nodes 
function FSH_get_group_nodes(_group){

}

function FSH_get_upstream_nodes(_node){
    

}

function FSH_get_downstream_nodes(_node){
    
}

function FSH_link_nodes(_node_A,_node_B){

}

function FSH_add_node(_type,_name,_x,_y){

}



function FSH_get_transform_object(_node){
    var transform_object = {
        position:{
            x:node.getTextAttr(_node, frame.current(), "POSTION.X"),
            y:node.getTextAttr(_node, frame.current(), "POSTION.Y"),
            z:node.getTextAttr(_node, frame.current(), "POSTION.Z"),
        },
        rotation:node.getTextAttr(_node, frame.current(), "ROTATION.ANGLEZ"),
        scale:node.getTextAttr(_node, frame.current(), "SCALE"),
        skew:node.getTextAttr(_node, frame.current(), "SKEW"),
    }
    return transform_object
    
}

// transformation
function FSH_get_position(_node){
    return {
        x:node.getTextAttr(_node, frame.current(), "POSTION.X"),
        y:node.getTextAttr(_node, frame.current(), "POSTION.Y"),
        z:node.getTextAttr(_node, frame.current(), "POSTION.Z"),
    }
}

function FSH_set_position(_node,_x,_y,_z){
    if(_x!="asis"){
        node.setTextAttr(_node, "POSTION.X",frame.current(),_x)
    }
    if(_y!="asis"){
        node.setTextAttr(_node, "POSTION.Y",frame.current(),_y)
    }    
    if(_z!="asis"){
        node.setTextAttr(_node, "POSTION.Z",frame.current(),_z)
    }
}


function FSH_get_rotation(_node){
    return node.getTextAttr(_node, frame.current(), "ROTATION.ANGLEZ");
}

function FSH_set_rotation(_node,_angle,_frame){
    node.setTextAttr(_node, "ROTATION.ANGLEZ",frame.current(),_z)
}

function FSH_get_scale(_node){
    return node.getTextAttr(_node, frame.current(), "SCALE");
}

function FSH_set_scale(_node,_scale,_frame){

}

function FSH_set_transform(_node,_transform_obect){

}


//attribute 
function FSH_get_attribute(_node,_attr){
    
}
function FSH_set_attribute(_node,_attr,_value){

}
function FSH_get_attribute_at_frame(_node,_attr,_frame){
    
}
function FSH_set_attribute_at_frame(_node,_attr,_value,_frame){

}
function FSH_get_attribute_object(_node){

}

// substitutions 
function FSH_expose_sub(_node,_subname,_frame){

}

function FSH_add_sub(_node,_subname,_frame){

}

function FSH_get_exposed_sub(_node,_subname,_frame){

}

//keys 
function FSH_get_key(_node,_attr,_frame){

}

function FSH_add_key(_node,_attr,_frame,_value){

}


