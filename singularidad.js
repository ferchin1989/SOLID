           // SOLID
           // Raul Fernando Castaño Arias


           // s- singularidad: Establece que una clase, componente o microservicio debe 
           // ser responsable de una sola cosa
           
           /*

           class datosEmpleado
            {
                // el constructor de una clase es un metodo especial
                // que se ejecuta en el momento de instanciar la clase
                constructor(nombre,genero,telefono,ciudad,email)
                {
                   this.nombre = nombre
                   this.apellido = genero
                   this.telefono = telefono
                   this.ciudad = ciudad
                   this.email = email
                }

            }
 
            // esta clase solo guarda los datos del empeleado de la empresa
            class datosEmpresa
            {
                // el constructor de una clase es un metodo especial
                // que se ejecuta en el momento de instanciar la clase
                constructor(nombre,actividad,telefono,ciudad,email)
                {
                   this.nombre = nombre
                   this.actividad = actividad
                   this.telefono = telefono
                   this.ciudad = ciudad
                   this.email = email
                }

            }



            const andres = new datosEmpleado("Andres","castro","3102545689","Bogota","Andre@Andres.com")
            const copetran = new datosEmpresa("Copetran","Mensajeria","2552600","Bogota","Copetran@copetran.com")
            document.write(`hola me llamo ${andres.nombre} y vivo en la ciudad de ${andres.ciudad}, trabajo en la empresa ${copetran.nombre}`)

            */

           // o - opén/close: (clases, módulos y funciones): Deberían estar abiertos para su extensión, 
           // pero cerrados para su modificación

           /*
           
           // esta clase esta abierta para la extencion de las subclases
           class Empleado
           {
               // el constructor de una clase es un metodo especial
               // que se ejecuta en el momento de instanciar la clase
               constructor(nombre,cargo)
               {
                  this.nombre = nombre
                  this.cargo = cargo
               }

               cargo()
               {
                  console.log("soy nuevo")
               }

           }
           
           // estas clases heredan de la clase padre
           class Contador extends Empleado{
               constructor(nombre, cargo, salario)
               {
                   //con el metodo super() se manda a llamar el
                   //constructor de la clase padre
                   super(nombre, cargo)
                   this.salario = salario
               }

               cargo()
               {
                   console.log("soy Contador")
               }

           }

           class Mensajero extends Empleado{
            constructor(nombre, cargo, salario)
            {
                //con el metodo super() se manda a llamar el
                //constructor de la clase padre
                super(nombre, cargo)
                this.salario = salario
            }

            cargo()
            {
                console.log("soy Mensajero")
            }

        }

           const andrea = new Contador ("Andrea","Contador","1500000"),
                 juan = new Mensajero ("Juan","Mensajero","1000000")
           
           document.write(`mi nombre es ${andrea.nombre}, y soy ${andrea.cargo}`)
           document.write(`mi nombre es ${juan.nombre}, y soy ${juan.cargo}`)

           */

           // L: Principio de substitución de Liskov: Declara que una subclase debe ser sustituible por 
           // su superclase, y si al hacer esto, el programa falla, estaremos violando este principio.
           
           
           /*


           // esta es la clase pricipal 
           class Empleado
           {
               constructor(nombre,cargo,salario)
               {
                  this.nombre = nombre
                  this.cargo = cargo
                  this.genero = salario
               }

               saludo()
               {
                  document.write("hola, soy un empleado normal")
               }

               salario()
               {
                   this.salario =1000000
                   document.write(`y gano ${this.salario}`)
               }
           }
           
           // esta puede sustituir los atributos de la clase principal
           class Contador extends Empleado{
               constructor(nombre, cargo, salario,area)
               {
                   //con el metodo super() se manda a llamar el
                   //constructor de la clase padre
                   super(nombre, cargo, salario)
                   this.area = area
               }

               saludo()
               {
                   document.write("soy Contador")
               }

               salario()
               {
                   this.salario =1500000
                   document.write(`y gano ${this.salario}`)
               }

               Area()
               {
                this.area = "Contabilidad"
                document.write(`me encuentro en el area de ${this.area}`)
               }
               



           }

           const andrea = new Empleado("Andrea","",""),
                 juan = new Contador ("juan","Contador","1700000")
           
           document.write(andrea.nombre)
           andrea.saludo()
           andrea.salario()
           document.write(juan.nombre)
           juan.saludo()
           juan.salario()
           juan.Area()
           
           */

           // I: Principio de segregación de interfaz: Este principio establece que los clientes no deberían 
           // verse forzados a depender de interfaces que no usan.
           
           /*

           class Empleado
           {
               constructor(nombre,cargo,salario)
               {
                  this.nombre = nombre
                  this.cargo = cargo
                  this.genero = salario
               }

               saludoI()
               {
                  document.write("soy de la compañia aviatur")
               }
           }
           // se maneja un perfil de contador
           class Contador extends Empleado{
               constructor(nombre, cargo, salario,area)
               {
                   //con el metodo super() se manda a llamar el
                   //constructor de la clase padre
                   super(nombre, cargo, salario)
                   this.area = area
               }

               saludo()
               {
                   document.write(`me me llamo ${this.nombre} soy ${this.cargo}`)
               }

               Area()
               {
                this.area = "Contabilidad"
                document.write(`me encuentro en el area de ${this.area}`)
               }

               salario()
               {
                   this.salario =1500000
                   document.write(`y gano ${this.salario}`)
               }
            }
            
            // se maneja un perfil de empacador
            class Empacador extends Empleado{
                constructor(nombre, cargo, salario,area)
                {
                    //con el metodo super() se manda a llamar el
                    //constructor de la clase padre
                    super(nombre, cargo, salario)
                    this.area = area
                }
 
                saludo()
                {
                    document.write(`me me llamo ${this.nombre} soy ${this.cargo}`)
                }
 
                Area()
                {
                 this.area = "Empaque"
                 document.write(`me encuentro en el area de ${this.area}`)
                }
 
                salario()
                {
                    this.salario =1000000
                    document.write(`y gano ${this.salario}`)
                }

           }
           
           // se crean las instancias segun sea el caso del tipo de empleado
           const andrea = new Empleado("Andrea","",""),
                 juan = new Contador ("juan","Contador","1700000"),
                 carlos = new Empacador ("Carlos","Empacador","","")

           // se llaman las instancias segun sea el caso del tipo de 
           // empleado para que no se mezclen las interfaces
           document.write(andrea.nombre)
           andrea.saludoI()
           document.write(juan.nombre)
           juan.saludoI()
           juan.saludo()
           juan.salario()
           juan.Area()
           document.write(carlos.nombre)
           carlos.saludoI()
           carlos.saludo()
           carlos.salario()
           carlos.Area()
           
           */

           // D: Principio de inversión de dependencias: Establece que las dependencias 
           // deben estar en las abstracciones, no en las concreciones
           
           

           class Empresa
           {
               constructor(nombre,cargo,salario,area,empresa,telEmpresa)
               {
                  this.empresa = empresa
                  this.telEmpresa = telEmpresa
                  this.nombre = nombre
                  this.cargo= cargo
                  this.salario = salario
                  this.area= area
               }

               saludoEmp()
               {
                  document.write("Somos una empresa que le da seguro a su vuelo")
               }
           }
        
           class Contador extends Empresa{
               constructor(nombre, cargo, salario,area)
               {
                   //con el metodo super() se manda a llamar el
                   //constructor de la clase padre
                   super(nombre, cargo, salario)
                   this.area = area
               }

               saludo()
               {
                   document.write(`me llamo ${this.nombre} soy ${this.cargo}`)
               }

               Area()
               {
                this.area = "Contabilidad"
                document.write(`me encuentro en el area de ${this.area}`)
               }

            }
            
            // se maneja un perfil de empacador
            class Empacador extends Empresa{
                constructor(nombre, cargo, salario,area)
                {
                    //con el metodo super() se manda a llamar el
                    //constructor de la clase padre
                    super(nombre, cargo, salario)
                    this.area = area
                }
 
                saludo()
                {
                    document.write(`me me llamo ${this.nombre} soy ${this.cargo}`)
                }
 
                Area()
                {
                 this.area = "Empaque"
                 document.write(`me encuentro en el area de ${this.area}`)
                }

           }
           
           // se crean las instancias segun sea el caso del tipo de empleado
           const juan = new Contador ("juan","Contador","",""),
                 carlos = new Empacador ("Carlos","Empacador","","")

           // se llaman las instancias segun sea el caso del tipo de 
           // empleado para que no se mezclen las interfaces
           document.write(juan.nombre)
           juan.saludoEmp()
           juan.saludo()          
           juan.Area()
           document.write(carlos.nombre)
           carlos.saludoEmp()
           carlos.saludo()
           carlos.Area()

           





            
