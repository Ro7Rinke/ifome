export const pesquisaEstabelecimento = (estabelecimentos:any, texto:string) => {
    let ids_estabelecimentos:string[] = []
    for (const key in estabelecimentos)
        if(typeof estabelecimentos[key].nome == 'string' && estabelecimentos[key].nome.toLowerCase().indexOf(texto.toLowerCase()) != -1) 
            ids_estabelecimentos.push(key)
    return ids_estabelecimentos
}

export const pesquisaMenu = (menu:any, texto:string) => {
    let ids_menu:string[] = []
    for(const key in menu)
        if(typeof menu[key].nome == 'string' && menu[key].nome.toLowerCase().indexOf(texto.toLowerCase()) != -1)
            ids_menu.push(key)
    return ids_menu
}
