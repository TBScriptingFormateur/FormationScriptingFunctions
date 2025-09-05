
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



function FSH_get_transform_object(_node,_frame){
    // return an object gathering the main attribute value of the node (frame is optionnal)
    const aframe = _frame != undefined ? _frame : frame.current()
    var transform_object = {
        position:{
            x:node.getTextAttr(_node, frame, "POSTION.X"),
            y:node.getTextAttr(_node, frame, "POSTION.Y"),
            z:node.getTextAttr(_node, frame, "POSTION.Z")
        },
        rotation:node.getTextAttr(_node, frame, "ROTATION.ANGLEZ"),
        scale:node.getTextAttr(_node, frame, "SCALE"),
        skew:node.getTextAttr(_node, frame, "SKEW")
    }
    return transform_object
    
}

// transformation
function FSH_get_position(_node,_frame){
    // return an object describing the node transform position (frame is optionnal)
    const aframe = _frame != undefined ? _frame : frame.current()
    return {
        x:node.getTextAttr(_node,  frame, "POSTION.X"),
        y:node.getTextAttr(_node,  frame, "POSTION.Y"),
        z:node.getTextAttr(_node,  frame, "POSTION.Z")
    }
}

function FSH_set_position(_node,_x,_y,_z){
    // set the transform position , if the argument is 'asis' don't change anything 
    if(_x!="asis"){
        node.setTextAttr(_node, "POSTION.X",aframe.current(),_x)
    }
    if(_y!="asis"){
        node.setTextAttr(_node, "POSTION.Y",aframe.current(),_y)
    }    
    if(_z!="asis"){
        node.setTextAttr(_node, "POSTION.Z",aframe.current(),_z)
    }
}


function FSH_get_rotation(_node){
    // return the rotation of the node 
    const aframe = _frame != undefined ? _frame : frame.current()
    return node.getTextAttr(_node, aframe, "ROTATION.ANGLEZ");
}

function FSH_set_rotation(_node,_angle,_frame){
    const aframe = _frame != undefined ? _frame : frame.current()
    node.setTextAttr(_node, "ROTATION.ANGLEZ",aframe,_angle)
}

function FSH_get_scale(_node){
    const aframe = _frame != undefined ? _frame : frame.current()
    return node.getTextAttr(_node,aframe, "SCALE");
}

function FSH_set_scale(_node,_scale,_frame){
    const aframe = _frame != undefined ? _frame : frame.current()
    node.setTextAttr(_node, "SCALE",aframe,_scale)
}

function FSH_set_transform(_node,_transform_obect,_frame){
    // take an object with transformation attributes and apply each value  to the node transform 
    const aframe = _frame != undefined ? _frame : frame.current()
    const key_attr_table = {
        pos_x:"POSITION.X",
        pos_y:"POSITION.Y",
        pos_z:"POSITION.Z",
        rotation:"ROTATION",
        scale:"SCALE"
    }
    var adapter = _transform_obect
    if(_transform_obect.position != undefined){
        adapter.pos_x = _transform_obect.position.x
        adapter.pos_y = _transform_obect.position.y
        adapter.pos_z = _transform_obect.position.z
    }
    /*
    for(const key in Object.keys(adapter)){
        const value = adapter[key]
        if(value == undefined){
            continue
        }
        if(key_attr_table[key]!=undefined){
            const attribute_name = key_attr_table[key]
            node.setTextAttr(_node, attribute_name,aframe,value)
        }
    }*/
}


//attribute 
function FSH_get_attribute_value(_node,_attr,_frame){
    const aframe = _frame != undefined ? _frame : frame.current()
    return node.getTextAttr(_node,aframe,_attr);
}
function FSH_set_attribute_value(_node,_attr,_value,_frame){
    const aframe = _frame != undefined ? _frame : frame.current()
    node.setTextAttr(_node, _attr,aframe,value)
}

function FSH_get_attribute_object(_node){
    const aframe = _frame != undefined ? _frame : frame.current()
    var table = []
    var names = []
    attributes = node.getAttrList(_node)
    for(var a in attributes){
        const attr = attributes[a]
        if(attr.hasSubAttributes()){
            sub_attr = attr.getSubAttributes()
            for (var b in sub_attr){
                var sub = sub_attr[b]
                names.push(sub.fullKeyword())
            }
        }else{
            names.push(attr.fullKeyword())
        }
    }
    table["node_type"] = node.type(_node)
    for(var n in names){
        const name = name[n]
        const value = node.getTextAttr(_node,aframe,name);
        table[name] = value
    }
    return table
}

function FSH_show_attributes(_node,_frame){
    const aframe = _frame != undefined ? _frame : frame.current()
    var table = []
    var names = []
    attributes = node.getAttrList(_node,_frame)
    for(var a in attributes){
        const attr = attributes[a]
        if(attr.hasSubAttributes()){
            sub_attr = attr.getSubAttributes()
            for (var b in sub_attr){
                var sub = sub_attr[b]
                names.push(sub.fullKeyword())
            }
        }else{
            names.push(attr.fullKeyword())
        }
    }
    var msg = "ATTRIBUTES OF "+_node+" ( "+node.type(_node)+") \n"
    for(var n in names){
        const name = name[n]
        const value = node.getTextAttr(_node,aframe,name);
        table[name] = value
        msg+=name+" : "+value
    }
    MessageLog.trace(msg)
    MessageBox.information(msg)
    return table
}

// substitutions 

function FSH_expose_sub(_node,_subname,_frame){
    // expose a sub by name 
    const aframe = _frame != undefined ? _frame : frame.current()
    if(node.type(_node)!="READ"){
        MessageLog.trace("Error node "+_node+" is not a READ ")
        return 
    }
    const readcol = node.linkedColumn(_node, "DRAWING")
    const sub_timing = column.getDrawingTimings(readcol);
    if(sub_timing.indexOf(_subname)!=-1){
        column.setEntry(readcol,1,aframe,_subname);
    }
}

function FSH_add_sub(_node,_subname,_frame){

}

function FSH_get_exposed_sub(_node,_frame){
    MessageLog.trace("FSH_get_exposed_sub ("+_node+") ("+_frame+")")
    // return all the name of the exposed sub at a frame
    const aframe = _frame != undefined ? _frame : frame.current()
    if(node.type(_node)!="READ"){
        MessageLog.trace("Error node "+_node+" is not a READ ")
        return 
    }
    const readcol = node.linkedColumn(_node, "DRAWING")
    MessageLog.trace(readcol)
    var sub_name = column.getEntry(readcol,0,aframe);
    MessageLog.trace("return ("+sub_name+")")
    return sub_name
}


function FSH_get_substitutions(_node){
    // return all the banked subs of the node
    if(node.type(_node)!="READ"){
        MessageLog.trace("Error node "+_node+" is not a READ ")
        return 
    }
    const readcol = node.linkedColumn(_node, "DRAWING")
    const  sub_timing = column.getDrawingTimings(readcol);
    return sub_timing
}


//keys 
function FSH_get_key(_node,_attr,_frame){

}

function FSH_add_key(_node,_attr,_frame,_value){

}


