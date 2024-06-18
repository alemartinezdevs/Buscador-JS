const autos = [
	{
		marca: 'Toyota', 
		modelo: 'Corolla Hybrid', 
		year: 2021, 
		precio: 40000, 
		puertas: 4, 
		color: 'Negro', 
		transmision: 'Automatico'
	},
	{
		marca: 'Porsche', 
		modelo: '718 Cayman GT4 RS', 
		year: 2023, 
		precio: 90000, 
		puertas: 4, 
		color: 'Azul', 
		transmision: 'Automatico'
    },
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2020,
		precio: 30000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ 
        marca: 'Audi', 
        modelo: 'A4', 
        year: 2020, 
        precio: 40000, 
        puertas: 4, 
        color: 'Negro', 
        transmision: 'automatico' 
    },
	{
		marca: 'Ford',
		modelo: 'Mustang',
		year: 2015,
		precio: 20000,
		puertas: 2,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ 
        marca: 'Audi', 
        modelo: 'A6', 
        year: 2020, 
        precio: 35000, 
        puertas: 4, 
        color: 'Negro', 
        transmision: 'automatico' 
    },
	{
		marca: 'Toyota', 
		modelo: 'GR Supra', 
		year: 2021, 
		precio: 200000, 
		puertas: 2, 
		color: 'Gris', 
		transmision: 'Manual'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2016,
		precio: 70000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2015,
		precio: 25000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Honda', 
		modelo: 'HR-V', 
		year: 2020, 
		precio: 80000, 
		puertas: 4, 
		color: 'Negro', 
		transmision: 'manual'
    },
	{
		marca: 'Chevrolet',
		modelo: 'Camaro',
		year: 2018,
		precio: 60000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Toyota', 
		modelo: '4Runner', 
		year: 2023, 
		precio: 40000, 
		puertas: 4, 
		color: 'Rojo', 
		transmision: 'Manual'
	},
	{ 
        marca: 'Ford', 
        modelo: 'Mustang', 
        year: 2019, 
        precio: 80000, 
        puertas: 2, 
        color: 'Rojo', 
        transmision: 'manual' 
    },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2020,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ 
        marca: 'Audi', 
        modelo: 'A3', 
        year: 2017, 
        precio: 55000, 
        puertas: 2, 
        color: 'Negro', 
        transmision: 
        'manual' 
    },
	{
		marca: 'Porsche', 
		modelo: 'Cayenne Turbo GT', 
		year: 2020, 
		precio: 300000, 
		puertas: 4, 
		color: 'Gris', 
		transmision: 'Automatico'
    },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2020,
		precio: 25000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Toyota', 
		modelo: 'Hilux', 
		year: 2023, 
		precio: 90000, 
		puertas: 4, 
		color: 'Negro', 
		transmision: 'Automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 45000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2019,
		precio: 90000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ 
        marca: 'Ford', 
        modelo: 'Mustang', 
        year: 2017, 
        precio: 60000, 
        puertas: 2, 
        color: 'Negro', 
        transmision: 'manual' 
    },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2015,
		precio: 35000,
		puertas: 2,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'Honda', 
		modelo: 'Ridgeline', 
		year: 2015, 
		precio: 70000, 
		puertas: 4, 
		color: 'Rojo', 
		transmision: 'Automatico'
    },
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2018,
		precio: 50000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2017,
		precio: 80000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Toyota', 
		modelo: 'Tundra Hev', 
		year: 2023, 
		precio: 100000, 
		puertas: 4, 
		color: 'Verde', 
		transmision: 'Manual'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ 
        marca: 'Audi', 
        modelo: 'A4', 
        year: 2016, 
        precio: 30000, 
        puertas: 4, 
        color: 'Azul', 
        transmision: 'automatico' 
    },
	{
		marca: 'Porsche', 
		modelo: '718 Cayman', 
		year: 2022, 
		precio: 200000, 
		puertas: 2, 
		color: 'Gris', 
		transmision: 'Automatico'
    },
    {
		marca: 'Mercedes Benz', 
		modelo: 'C-Class', 
		year: 2017, 
		precio: 32000, 
		puertas: 4, 
		color: 'Gris', 
		transmision: 'automatico'
    },
    {
		marca: 'Toyota', 
		modelo: 'Camry', 
		year: 2018, 
		precio: 200000, 
		puertas: 4, 
		color: 'Blanco', 
		transmision: 'automatico'
    },
    {
		marca: 'Honda', 
		modelo: 'Accord', 
		year: 2015, 
		precio: 29000, 
		puertas: 4, 
		color: 'Negro', 
		transmision: 'automatico'
    },
    {
		marca: 'Ford', 
		modelo: 'Focus', 
		year: 2020, 
		precio: 27000, 
		puertas: 4, 
		color: 'Rojo', 
		transmision: 'automatico'
    },
	{
		marca: 'Honda', 
		modelo: 'Civic Type R', 
		year: 2015, 
		precio: 60000, 
		puertas: 4, 
		color: 'Azul', 
		transmision: 'Automatico'
    },
    {
		marca: 'Chevrolet', 
		modelo: 'Malibu', 
		year: 2021, 
		precio: 30000, 
		puertas: 4, 
		color: 'Plata', 
		transmision: 'automatico'
    },
    {
		marca: 'Volkswagen', 
		modelo: 'Jetta', 
		year: 2019, 
		precio: 25000, 
		puertas: 4, 
		color: 'Azul', 
		transmision: 'automatico'
    },
    {
		marca: 'BMW', 
		modelo: 'X5', 
		year: 2020, 
		precio: 50000, 
		puertas: 4, 
		color: 'Negro', 
		transmision: 'automatico'
    },
    {
		marca: 'Tesla', 
		modelo: 'Model 3', 
		year: 2022, 
		precio: 60000, 
		puertas: 4, 
		color: 'Blanco', 
		transmision: 'automatico'
    },
    {
		marca: 'Lexus', 
		modelo: 'ES', 
		year: 2023, 
		precio: 55000, 
		puertas: 4, 
		color: 'Rojo', 
		transmision: 'automatico'
    },
    {
		marca: 'Subaru', 
		modelo: 'Outback', 
		year: 2021, 
		precio: 35000, 
		puertas: 4, 
		color: 'Verde', 
		transmision: 'automatico'
    },
    {
		marca: 'Hyundai', 
		modelo: 'Sonata', 
		year: 2020, 
		precio: 30000, 
		puertas: 4, 
		color: 'Negro', 
		transmision: 'automatico'
    },
    {
		marca: 'Kia', 
		modelo: 'Optima', 
		year: 2022, 
		precio: 32000, 
		puertas: 4, 
		color: 'Azul', 
		transmision: 'automatico'
    },
    {
		marca: 'Mazda', 
		modelo: 'Mazda6', 
		year: 2021, 
		precio: 28000, 
		puertas: 4, 
		color: 'Blanco', 
		transmision: 'automatico'
    },
	{
		marca: 'Honda', 
		modelo: 'Pilot', 
		year: 2020, 
		precio: 60000, 
		puertas: 4, 
		color: 'Azul', 
		transmision: 'manual'
    },
    {
		marca: 'Nissan', 
		modelo: 'Altima', 
		year: 2020, 
		precio: 29000, 
		puertas: 4, 
		color: 'Gris', 
		transmision: 'automatico'
    },
    {
		marca: 'Volvo', 
		modelo: 'S60', 
		year: 2021, 
		precio: 33000, 
		puertas: 4, 
		color: 'Plateado', 
		transmision: 'automatico'
    },
    {
		marca: 'Jaguar', 
		modelo: 'XE', 
		year: 2022, 
		precio: 45000, 
		puertas: 4, 
		color: 'Negro', 
		transmision: 'automatico'
    },
    {
		marca: 'Porsche', 
		modelo: 'Panamera', 
		year: 2020, 
		precio: 80000, 
		puertas: 4, 
		color: 'Azul', 
		transmision: 'automatico'
    },
    {
		marca: 'Land Rover', 
		modelo: 'Range Rover Evoque', 
		year: 2021, 
		precio: 70000, 
		puertas: 4, 
		color: 'Blanco', 
		transmision: 'automatico'
    },
    {
		marca: 'Acura', 
		modelo: 'TLX', 
		year: 2022, 
		precio: 45000, 
		puertas: 4, 
		color: 'Negro', 
		transmision: 'automatico'
    },
	{
		marca: 'Honda', 
		modelo: 'Civic', 
		year: 2020, 
		precio: 30000, 
		puertas: 4, 
		color: 'blanco', 
		transmision: 'manual'
    },
	{
		marca: 'Porsche', 
		modelo: '911 Carrera 4 GTS', 
		year: 2023, 
		precio: 100000, 
		puertas: 4, 
		color: 'Azul', 
		transmision: 'Automatico'
    }
	
];
