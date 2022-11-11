Uso del custom hook:

Importal el custom hook:
```
    import useWaifuService  from '/src/hook/useWaifuService'
```

Instanciacion:

```
    const waifuHook = useWaifuService();
```

Cuando es instanciado el custom hook este retorna un objeto con las siguiente propiedades y metodos:

 = Propiedades:
    - waifusList (Es un estado que contiene una lista de url "imagenes" segun una categoria y tipo)
    - waifuUnique ( Es un estado que contiene una url "imagen" segun una categoria y tipo)
    - randomWaifu ( Es un estado que contiene una url "imagen" aleatoria entre categorias y tipos)
  
 - Metodos:
    - getWaifus
    - getRandomWaifu

 
 getWaifus():
 - Resive un objeto con las siguientes propiedades: 
  ```{type:string, category: string, unique:boolean}```

  - type: Tiene que contener un valor homologado segun el enum ```WaifuType```.
  - category: Tiene que contener un valor homologado segun el enum ```WaifuCategoryTypeSFW``` o ``` WaifuCategoryTypeNSFW ```.

getRandomWaifu():
- No resive ningun dato de entrada.  