function create_nodes_from_json(_path){

    var file = new File(_path)
    file.open(FileAccess.ReadOnly)
    var content = file.read()
    

    var creation_list = JSON.parse(content).list_de_node
    for(var i in creation_list ){
        const cnode = creation_list[i]
        MessageLog.trace(cnode.name)
        node.add("Top",cnode.name,cnode.type,cnode.x,cnode.y,0)
    }

}

MessageLog.trace("COUCOU je suis executé ")

var path = "C:/Users/LE SOCLE/Documents/GitHub/FormationScriptingHarmony/exercices/fiche_perso_dnd.json"
create_nodes_from_json(path)

MessageLog.trace("execution terminé !")

// C:/Users/LE SOCLE/Documents/GitHub/FormationScriptingHarmony/exercices/mon_script_en_batch.js

