# Store

Angular v12
Node v16.10.0

# Generar un componente
  ng g c ruta/nombreDelcomponente

# Generar un modulo
  ng g m ruta/nombreDelModulo

# Generar un modulo y una ruta
  ng g m ruta/nombreComponente --routing ruta/


# Generar un servicio
  ng g s ruta/nombreDelServicio

# Generar un pipe
  ng g p ruta/nombreDelpipe

# Comandoss git
  git pull
  git status  -- para ver el estado del proyecto
  git add . ó git add "NombreArchivoSinComillas o rutaSinComillas"
  git commit -m "Mensaje del commit"
  git push

# Comandos git
  git pull upstream develop     //Para descargar cambios
  git status      //Para consultar los cambios o ver el estado del proyecto
  git add .       //Para seleccionar todos los archivos
  git add "NombreArchivoSinComillas o rutaSinComillas"      //Para seleccionar un archivo en especifico
  git commit -m "Mensaje del commit"
  git push upstream develop

# Resolución de Conflictos con Git Stash
  1. `git status`
    Verificar el estado actual del repositorio para identificar los archivos con conflictos.

  2. `git stash save "mensaje"`
    Guardar los cambios sin preparar en un stash temporal para limpiar el directorio de trabajo.

  3. `git pull upstream develop`
    Actualizar la rama local con los cambios remotos antes de resolver conflictos.

  4. `git stash drop`
    Aplicar los cambios guardados del stash al directorio de trabajo.

  5. Resolver los conflictos:
    Editar los archivos con conflictos y eliminar las marcas de conflicto `<<<<<<<`, `=======`, y `>>>>>>>`.

  6. `git add <nombre_archivo>`
    Agregar los archivos resueltos al área de preparación.

  8. `git commit -m "Mensaje del commit"`
    Realizar un nuevo commit para guardar los cambios resueltos en la rama.

  9. `Crear un componente reusable"`
    1.- ng g m ruta/nombreDelModulo
    1.1- ng g m shared/components/nombre del modulo --> ejemplo

    2.- ng g c ruta/nombreDelcomponente
    2.1- ng g c shared/components/nombre del componente --> ejemplo