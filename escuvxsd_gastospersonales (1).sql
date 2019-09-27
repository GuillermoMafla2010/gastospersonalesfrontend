-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 27-09-2019 a las 00:24:50
-- Versión del servidor: 10.1.41-MariaDB-cll-lve
-- Versión de PHP: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `escuvxsd_gastospersonales`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bancos`
--

CREATE TABLE `bancos` (
  `id` int(11) NOT NULL,
  `nombre_banco` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `bancos`
--

INSERT INTO `bancos` (`id`, `nombre_banco`) VALUES
(8, 'Banco Pichincha'),
(9, 'Banco Internacional'),
(10, 'Cooperativa Atuntaqui'),
(11, 'Coop. 29 de Octubre');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias_gastos`
--

CREATE TABLE `categorias_gastos` (
  `id` int(11) NOT NULL,
  `nombre_categoria` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `categorias_gastos`
--

INSERT INTO `categorias_gastos` (`id`, `nombre_categoria`) VALUES
(1, 'Alimentacion'),
(4, 'Compras'),
(10, 'Cuidado Personal'),
(8, 'Entretenimiento'),
(5, 'Impuestos'),
(9, 'Medicinas'),
(3, 'Multas'),
(7, 'Otros'),
(6, 'Pago Tarjetas'),
(11, 'Ropa'),
(12, 'Tecnologia'),
(2, 'Transporte');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias_ingresos`
--

CREATE TABLE `categorias_ingresos` (
  `id` int(11) NOT NULL,
  `nombre_categoria` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `categorias_ingresos`
--

INSERT INTO `categorias_ingresos` (`id`, `nombre_categoria`) VALUES
(5, 'Devolucion de Dinero'),
(12, 'Encuentro Dinero'),
(10, 'Liquidaciones'),
(9, 'Otros'),
(13, 'Regalo'),
(11, 'Retiro Bancario'),
(4, 'Sueldo Decimo Cuarto'),
(3, 'Sueldo Decimo Tercero'),
(2, 'Sueldo Mensual'),
(1, 'Sueldo Quincenal'),
(7, 'Transferencia'),
(6, 'Utilidades'),
(8, 'Venta');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cgastos`
--

CREATE TABLE `cgastos` (
  `id` int(11) NOT NULL,
  `nombre_gasto` varchar(100) NOT NULL,
  `cantidad` float NOT NULL,
  `fecha` date NOT NULL,
  `cuentas_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cgastos`
--

INSERT INTO `cgastos` (`id`, `nombre_gasto`, `cantidad`, `fecha`, `cuentas_id`) VALUES
(16, 'Gasto v1', 30, '2019-09-08', 9),
(18, 'Emisión Facturas', 19.5, '2019-09-10', 10),
(20, 'Monto Transaccion', 0.4, '2019-09-21', 11),
(23, 'Cevichito con mi payasita juju', 11.6, '2019-09-21', 10),
(24, 'Retiro Sabado', 20, '2019-09-21', 10),
(25, 'Español samduchito xD', 11.97, '2019-09-21', 10),
(27, 'almuerzo martes', 5, '2019-09-24', 10),
(28, 'RETIRO MIERCOLES', 10, '2019-09-25', 11),
(29, 'iva', 0.24, '2019-09-26', 12),
(30, 'iva', 0.1, '2019-09-25', 12);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cingresos`
--

CREATE TABLE `cingresos` (
  `id` int(11) NOT NULL,
  `nombre_ingreso` varchar(100) NOT NULL,
  `cantidad` float NOT NULL,
  `fecha` date NOT NULL,
  `cuentas_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cingresos`
--

INSERT INTO `cingresos` (`id`, `nombre_ingreso`, `cantidad`, `fecha`, `cuentas_id`) VALUES
(20, 'Ingreso v1', 20, '2019-09-09', 9),
(21, 'Ingreso v2', 20, '2019-09-08', 9),
(22, 'Saldo Septiembre', 9.58, '2019-09-10', 12),
(24, 'Deposito Michelle', 80, '2019-09-10', 10),
(27, 'Saldo Actual', 97.53, '2019-09-20', 11),
(28, 'Deposito Agosto', 100, '2019-09-20', 12),
(30, 'Interes Cobrado', 0.34, '2019-09-21', 10),
(31, 'Interes cobrado', 0.1, '2019-09-21', 11);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuentas`
--

CREATE TABLE `cuentas` (
  `id` int(11) NOT NULL,
  `numero_cuenta` varchar(30) NOT NULL,
  `banco_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cuentas`
--

INSERT INTO `cuentas` (`id`, `numero_cuenta`, `banco_id`, `user_id`) VALUES
(8, '11111', 8, 3),
(9, '22222', 11, 3),
(10, '404', 8, 1),
(11, '405', 9, 1),
(12, '406', 10, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuotas`
--

CREATE TABLE `cuotas` (
  `id` int(11) NOT NULL,
  `deuda_id` int(11) NOT NULL,
  `nombre_cuota` varchar(100) NOT NULL,
  `cantidad_cuota` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cuotas`
--

INSERT INTO `cuotas` (`id`, `deuda_id`, `nombre_cuota`, `cantidad_cuota`) VALUES
(124, 79, 'asd Cuota 1', 1),
(125, 79, 'asd Cuota 5', 1),
(126, 79, 'asd Cuota 4', 1),
(127, 79, 'asd Cuota 7', 1),
(128, 79, 'asd Cuota 2', 1),
(129, 79, 'asd Cuota 11', 1),
(130, 79, 'asd Cuota 3', 1),
(131, 79, 'asd Cuota 6', 1),
(132, 79, 'asd Cuota 8', 1),
(133, 79, 'asd Cuota 10', 1),
(134, 79, 'asd Cuota 9', 1),
(135, 79, 'asd Cuota 12', 1),
(137, 80, 'asd Cuota 11', 10.1667),
(138, 80, 'asd Cuota 4', 10.1667),
(139, 80, 'asd Cuota 5', 10.1667),
(140, 80, 'asd Cuota 7', 10.1667),
(142, 80, 'asd Cuota 3', 10.1667),
(143, 80, 'asd Cuota 1', 10.1667),
(145, 80, 'asd Cuota 8', 10.1667),
(146, 80, 'asd Cuota 6', 10.1667),
(147, 80, 'asd Cuota 9', 10.1667);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `deudas`
--

CREATE TABLE `deudas` (
  `id` int(11) NOT NULL,
  `nombre_deuda` varchar(150) NOT NULL,
  `fecha` date NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `cantidad` float NOT NULL,
  `pagado` tinyint(1) NOT NULL,
  `cuota` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `deudas`
--

INSERT INTO `deudas` (`id`, `nombre_deuda`, `fecha`, `usuario_id`, `cantidad`, `pagado`, `cuota`) VALUES
(79, 'asd', '2019-09-27', 1, 12, 0, 12),
(80, 'asd', '2019-09-27', 1, 122, 0, 12);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gastos`
--

CREATE TABLE `gastos` (
  `id` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `cantidad_gasto` float(10,2) NOT NULL,
  `nombre_gasto` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `categoria_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `gastos`
--

INSERT INTO `gastos` (`id`, `fecha`, `cantidad_gasto`, `nombre_gasto`, `user_id`, `categoria_id`) VALUES
(155, '2019-08-04', 0.25, 'Pasaje', 1, 2),
(157, '2019-08-04', 0.81, 'Pasajes Sur Recreo', 1, 2),
(158, '2019-08-04', 0.50, 'Pasaje regreso norte sur', 1, 2),
(159, '2019-08-04', 12.00, 'Pelicula hoobs y shaw', 1, 8),
(160, '2019-08-05', 0.30, 'Compra Pan', 1, 1),
(161, '2019-08-05', 0.50, 'Compra de Todito', 1, 1),
(162, '2019-08-07', 0.65, 'Pasaje Pablo Dinapen', 1, 2),
(163, '2019-08-08', 2.50, 'Desayuno Monkis', 1, 1),
(164, '2019-08-08', 0.25, 'Pasaje ida', 1, 2),
(165, '2019-08-08', 0.50, 'Pasajes', 1, 2),
(166, '2019-08-08', 0.50, 'Pasajes al sur', 1, 2),
(167, '2019-08-08', 12.50, 'Comidita costillitas american deli con mi caperusa', 1, 1),
(168, '2019-08-09', 1.25, 'maracuyas', 1, 4),
(169, '2019-08-09', 0.50, 'de todito', 1, 1),
(170, '2019-08-09', 0.50, 'De todito', 1, 4),
(171, '2019-08-10', 1.50, 'Pasaje ida casa michelle', 1, 2),
(172, '2019-08-10', 1.50, 'Pasaje vuelta michelle casa', 1, 2),
(173, '2019-08-11', 0.65, 'Compra Rapidito', 1, 1),
(174, '2019-08-12', 1.25, 'Pasaje entrevista kfc', 1, 2),
(175, '2019-08-12', 0.25, 'Compra Desodorante', 1, 10),
(176, '2019-08-14', 0.75, 'Pasajes', 1, 2),
(177, '2019-08-15', 1.25, 'Pasajes confirmacion trabajo', 1, 2),
(178, '2019-08-15', 7.25, 'Compras en fiestas d mira', 1, 4),
(179, '2019-08-15', 0.65, 'Empanada', 1, 1),
(180, '2019-08-16', 0.50, 'de todito', 1, 1),
(181, '2019-08-16', 1.88, 'compra desayuno michelle', 1, 1),
(182, '2019-08-16', 4.11, 'Compra aderezo y de todito', 1, 1),
(183, '2019-08-16', 6.00, 'compra cerveza pilsener', 1, 8),
(184, '2019-08-16', 8.00, 'Lasaña', 1, 1),
(185, '2019-08-16', 2.92, 'aderezo', 1, 4),
(186, '2019-08-16', 0.63, 'ruffles', 1, 1),
(187, '2019-08-17', 0.28, 'Pan', 1, 1),
(188, '2019-08-17', 0.25, 'Pasaje Recreo', 1, 2),
(189, '2019-08-17', 2.75, 'Pasajes recreo casa', 1, 2),
(190, '2019-08-17', 6.00, 'Cheves', 1, 8),
(191, '2019-08-18', 1.28, 'pan y mote', 1, 1),
(192, '2019-08-18', 3.29, 'Gran milanesa gus', 1, 1),
(193, '2019-08-18', 0.60, 'Coca Cola Personal', 1, 1),
(194, '2019-08-19', 3.50, 'Almuerzo', 1, 1),
(195, '2019-08-20', 3.00, 'Almuerzo Martes', 1, 1),
(196, '2019-08-20', 2.00, 'Pasaje de dolar lunes', 1, 2),
(197, '2019-08-20', 2.00, 'pasajes martes', 1, 2),
(198, '2019-08-21', 4.40, 'Almuerzo Miércoles', 1, 1),
(199, '2019-08-21', 2.00, 'Pasajes Miercoles', 1, 2),
(200, '2019-08-22', 2.50, 'almuerzo jueves', 1, 1),
(201, '2019-08-22', 2.00, 'Pasajes Jueves', 1, 2),
(202, '2019-08-23', 3.50, 'Almuerzo Viernes', 1, 1),
(203, '2019-08-23', 2.00, 'Pasajes viernes 23', 1, 2),
(204, '2019-08-23', 2.00, 'Corte Cabello', 1, 10),
(205, '2019-08-25', 0.50, 'Compra de todito', 1, 1),
(206, '2019-08-25', 0.25, 'compra desodorante', 1, 10),
(207, '2019-08-26', 3.50, 'Almuerzo lunes', 1, 1),
(208, '2019-08-26', 2.00, 'Pasajes lunes', 1, 2),
(209, '2019-08-27', 3.00, 'Almuerzo Gus', 1, 1),
(210, '2019-08-27', 2.00, 'Pasajes Martes 27', 1, 2),
(211, '2019-08-29', 3.00, 'Almuerzo miercoles', 1, 1),
(212, '2019-08-28', 2.00, 'Pasajes Miercoled', 1, 2),
(213, '2019-08-28', 1.00, 'copia cedula', 1, 7),
(214, '2019-08-29', 4.00, 'almuerzo kfc', 1, 1),
(215, '2019-08-29', 2.00, 'Pasajes Jueves', 1, 2),
(216, '2019-08-29', 0.25, 'Desodorante', 1, 10),
(217, '2019-08-30', 0.20, 'chicles', 1, 4),
(218, '2019-08-30', 3.50, 'Almuerzo Viernes 30', 1, 1),
(219, '2019-08-30', 2.00, 'Pasajes Viernes 30', 1, 2),
(220, '2019-08-31', 0.25, 'Pasajes Zona', 1, 2),
(221, '2019-08-31', 18.25, 'Almuerzo planet express  con mi bbuka', 1, 1),
(222, '2019-08-31', 8.00, 'Michelada Maracuya', 1, 8),
(223, '2019-08-31', 10.00, 'Paseo', 1, 8),
(224, '2019-08-31', 1.50, 'Pasajes Sabados', 1, 2),
(225, '2019-08-31', 1.35, 'Compra Pan y 220v', 1, 1),
(226, '2019-09-01', 0.95, 'Coca Cola', 1, 1),
(227, '2019-09-02', 1.40, 'Copia Cedula', 1, 7),
(228, '2019-09-02', 3.50, 'Almuerzo Lunes', 1, 1),
(229, '2019-09-02', 2.00, 'Pasajes Lunes', 1, 2),
(230, '2019-09-03', 3.25, 'Almuerzo Martes', 1, 1),
(231, '2019-09-03', 2.00, 'Pasajes Martes', 1, 2),
(232, '2019-09-04', 3.25, 'Almuerzo miercoles', 1, 1),
(233, '2019-09-04', 2.00, 'Pasajes Miercoles', 1, 2),
(234, '2019-09-05', 3.50, 'Almuerzo Jueves', 1, 1),
(235, '2019-09-05', 2.00, 'Pasajes Jueves', 1, 2),
(236, '2019-09-06', 3.49, 'Aderezo', 1, 8),
(237, '2019-09-06', 3.50, 'Almuerzo Viernes', 1, 1),
(238, '2019-09-06', 5.45, 'compra six', 1, 8),
(239, '2019-09-06', 2.00, 'passjes viernes', 1, 2),
(240, '2019-09-06', 0.50, 'de todito', 1, 1),
(241, '2019-09-07', 0.25, 'pasaje recreo', 1, 2),
(242, '2019-09-07', 6.00, 'Pelicula payaso jujuju  con caperusa', 1, 8),
(243, '2019-09-07', 3.50, 'Comidita para el payaso jujuju', 1, 8),
(244, '2019-09-07', 11.38, 'Comidita american deli antes d concierto con mi caperusita', 1, 1),
(245, '2019-09-07', 1.00, 'Agua Concierto', 1, 4),
(247, '2019-09-09', 3.25, 'almuerzo lunes', 1, 1),
(248, '2019-09-09', 2.00, 'pasajes lunes', 1, 2),
(249, '2019-09-10', 3.00, 'Almuerzo Martes', 1, 1),
(250, '2019-09-10', 2.00, 'Pasajes martes', 1, 2),
(251, '2019-09-11', 0.30, 'yogur mashi', 1, 7),
(252, '2019-09-11', 3.00, 'almuerzo miercoles mongos', 1, 1),
(253, '2019-09-11', 2.00, 'pasajes miercoles', 1, 2),
(254, '2019-09-12', 3.00, 'Almuerzo jueves', 1, 1),
(255, '2019-09-12', 2.00, 'Pasajes Jueves', 1, 2),
(256, '2019-09-13', 0.30, 'compra pan', 1, 1),
(257, '2019-09-13', 4.44, 'Lays', 1, 8),
(258, '2019-09-13', 5.47, 'pasajes viernes', 1, 2),
(259, '2019-09-14', 6.60, 'six', 1, 8),
(260, '2019-09-15', 2.70, 'Pasaje sur', 1, 2),
(261, '2019-09-15', 3.00, 'Comidita Petizo con mi reinita', 1, 1),
(262, '2019-09-16', 2.00, 'Pasajes Lunes', 1, 2),
(263, '2019-09-16', 3.50, 'Almuerzo Lunes', 1, 1),
(264, '2019-09-17', 0.30, 'compra pan', 1, 1),
(265, '2019-09-17', 1.00, 'Salchipapa', 1, 1),
(266, '2019-09-17', 4.00, 'Almuerzo martes', 1, 1),
(267, '2019-09-17', 2.00, 'Pasajes Martes', 1, 2),
(268, '2019-09-18', 0.30, 'Compra Pan', 1, 1),
(269, '2019-09-18', 2.00, 'Pasaje miercoles', 1, 2),
(270, '2019-09-18', 3.00, 'Almuerzo Miercoles', 1, 1),
(271, '2019-09-18', 0.30, 'Compra Pan', 1, 1),
(272, '2019-09-19', 2.00, 'Pasajes Jueves', 1, 2),
(273, '2019-09-20', 2.00, 'Pasaje Viernes', 1, 2),
(274, '2019-09-20', 3.50, 'Almuerzo Viernes', 1, 1),
(275, '2019-09-20', 3.87, 'papas lays', 1, 1),
(276, '2019-09-21', 3.25, 'Pasaje sabado hm', 1, 2),
(277, '2019-09-21', 1.60, 'Ubre sur', 1, 2),
(278, '2019-09-21', 2.90, 'Crepe', 1, 1),
(279, '2019-09-21', 3.42, 'Fusetea cine', 1, 1),
(280, '2019-09-22', 4.05, '3c', 1, 8),
(281, '2019-09-23', 1.18, 'Compra, pan', 1, 1),
(282, '2019-09-23', 3.75, 'almuetzo lunes', 1, 1),
(283, '2019-09-23', 2.00, 'Pasajes lunes', 1, 2),
(284, '2019-09-24', 2.00, 'Pasaje martes', 1, 2),
(285, '2019-09-25', 2.00, 'Pasaje miercoles 25', 1, 2),
(286, '2019-09-26', 3.50, 'Almuerzo jueves', 1, 1),
(287, '2019-09-26', 1.00, 'pasajes jueves', 1, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ingresos`
--

CREATE TABLE `ingresos` (
  `id` int(11) NOT NULL,
  `nombre_ingreso` varchar(255) NOT NULL,
  `fecha` date NOT NULL,
  `cantidad_ingreso` float NOT NULL,
  `user_id` int(11) NOT NULL,
  `categoria_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `ingresos`
--

INSERT INTO `ingresos` (`id`, `nombre_ingreso`, `fecha`, `cantidad_ingreso`, `user_id`, `categoria_id`) VALUES
(31, 'Retiro de Banco', '2019-08-04', 29.5, 1, 13),
(32, 'Encuentro Dinero en la calle', '2019-08-05', 0.19, 1, 9),
(34, 'deposito', '2019-08-07', 1.7, 1, 13),
(35, 'Diana Pasajes', '2019-08-07', 2, 1, 13),
(36, 'Vuelto', '2019-08-08', 0.2, 1, 9),
(37, 'Encuentro dinero', '2019-08-09', 0.1, 1, 12),
(38, 'Regalo mamá', '2019-08-10', 4.25, 1, 13),
(39, 'Regalo guillo', '2019-08-12', 2, 1, 13),
(40, 'Regalo mami', '2019-08-15', 11, 1, 13),
(41, 'Retiro Cajero Aki', '2019-08-16', 20, 1, 11),
(42, 'Regalo Michelle', '2019-08-16', 4, 1, 13),
(43, 'Retiro con tarjeta de crédito', '2019-08-17', 50, 1, 11),
(44, 'Encuentro dinero casa', '2019-08-22', 0.25, 1, 12),
(45, 'Vuelto', '2019-08-25', 0.15, 1, 12),
(46, 'Regalo mamá', '2019-08-26', 13.25, 1, 13),
(48, 'Retiro', '2019-08-28', 10, 1, 11),
(49, 'Almuerzos mama', '2019-08-30', 5, 1, 13),
(50, 'Retiro Tarjeta', '2019-08-31', 60, 1, 11),
(51, 'Regalo mamá', '2019-09-02', 10, 1, 13),
(52, 'pasajes', '2019-09-05', 3, 1, 13),
(53, 'Adelanto Dinero', '2019-09-06', 60, 1, 11),
(54, 'encuentro taxi', '2019-09-10', 5, 1, 12),
(56, 'vuelto', '2019-09-12', 1.59, 1, 5),
(57, 'Retiro internacional', '2019-09-13', 10, 1, 11),
(58, 'Prestamo mamá', '2019-09-18', 20, 1, 13),
(59, 'Retiro', '2019-09-21', 20, 1, 11),
(60, 'Retiro Miercoles', '2019-09-25', 10, 1, 11),
(61, 'Regalo papa', '2019-09-25', 1.25, 1, 13);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `celular` varchar(30) NOT NULL,
  `foto` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `nombre`, `email`, `password`, `celular`, `foto`) VALUES
(1, 'Cristian Jativa', 'cjativa12@hotmail.com', '12345', '0983195552', ''),
(3, 'Michelle Davila', 'michelle@hotmail.com', '$2y$10$CHzIc62.lARV69XVefjhD.osJ31WzBGRMnHJuVlA3.KqCEYjdXAmK', '0992787200', 'micheu.jpg'),
(4, 'Diana Jativa', 'diana@hotmail.com', '$2y$10$iB37lqrufKw6hRFDqNdJx.rticsIRQS6vfmO.XluBSCyv4QKZeJsu', '0992787201', 'micheu.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `bancos`
--
ALTER TABLE `bancos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `categorias_gastos`
--
ALTER TABLE `categorias_gastos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nombre_categoria` (`nombre_categoria`);

--
-- Indices de la tabla `categorias_ingresos`
--
ALTER TABLE `categorias_ingresos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nombre_categoria` (`nombre_categoria`);

--
-- Indices de la tabla `cgastos`
--
ALTER TABLE `cgastos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cuentas_id` (`cuentas_id`);

--
-- Indices de la tabla `cingresos`
--
ALTER TABLE `cingresos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cuentas_id` (`cuentas_id`);

--
-- Indices de la tabla `cuentas`
--
ALTER TABLE `cuentas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `banco_id` (`banco_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `cuotas`
--
ALTER TABLE `cuotas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `deuda_id` (`deuda_id`);

--
-- Indices de la tabla `deudas`
--
ALTER TABLE `deudas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indices de la tabla `gastos`
--
ALTER TABLE `gastos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoria_id` (`categoria_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `ingresos`
--
ALTER TABLE `ingresos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `categoria_id` (`categoria_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `celular` (`celular`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `bancos`
--
ALTER TABLE `bancos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `categorias_gastos`
--
ALTER TABLE `categorias_gastos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `categorias_ingresos`
--
ALTER TABLE `categorias_ingresos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `cgastos`
--
ALTER TABLE `cgastos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `cingresos`
--
ALTER TABLE `cingresos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT de la tabla `cuentas`
--
ALTER TABLE `cuentas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `cuotas`
--
ALTER TABLE `cuotas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=148;

--
-- AUTO_INCREMENT de la tabla `deudas`
--
ALTER TABLE `deudas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT de la tabla `gastos`
--
ALTER TABLE `gastos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=288;

--
-- AUTO_INCREMENT de la tabla `ingresos`
--
ALTER TABLE `ingresos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cgastos`
--
ALTER TABLE `cgastos`
  ADD CONSTRAINT `cgastos_ibfk_1` FOREIGN KEY (`cuentas_id`) REFERENCES `cuentas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `cingresos`
--
ALTER TABLE `cingresos`
  ADD CONSTRAINT `cingresos_ibfk_1` FOREIGN KEY (`cuentas_id`) REFERENCES `cuentas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `cuentas`
--
ALTER TABLE `cuentas`
  ADD CONSTRAINT `cuentas_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `cuentas_ibfk_3` FOREIGN KEY (`banco_id`) REFERENCES `bancos` (`id`);

--
-- Filtros para la tabla `cuotas`
--
ALTER TABLE `cuotas`
  ADD CONSTRAINT `cuotas_ibfk_1` FOREIGN KEY (`deuda_id`) REFERENCES `deudas` (`id`);

--
-- Filtros para la tabla `deudas`
--
ALTER TABLE `deudas`
  ADD CONSTRAINT `deudas_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `gastos`
--
ALTER TABLE `gastos`
  ADD CONSTRAINT `gastos_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gastos_ibfk_2` FOREIGN KEY (`categoria_id`) REFERENCES `categorias_gastos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `ingresos`
--
ALTER TABLE `ingresos`
  ADD CONSTRAINT `ingresos_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ingresos_ibfk_2` FOREIGN KEY (`categoria_id`) REFERENCES `categorias_ingresos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
