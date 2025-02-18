const express = require('express');
const authService = require('./auth.service');

// auth.controller.js

/**
 * Este proyecto se centra en el desarrollo de una API web implementada en NodeJS, destinada a gestionar el registro
 * de ventas, productos en línea y otras operaciones comerciales de una empresa. La aplicación se estructura en dos
 * secciones principales, administrador y cliente.
 * 
 * Administrador:
 * - Gestión de productos
 * - Gestión de categorías
 * - Gestión de usuarios
 * - Gestión de facturas
 * 
 * Cliente:
 * - Autenticación de Usuario
 * - Exploración de Productos
 * - Gestión de Carrito de Compras
 * - Proceso de Compra
 * - Historial de Compra
 * - Gestión de perfil
 * - Eliminación de Cuenta
 * 
 * Todas las funciones descritas requieren autenticación para acceder y se respaldan en una base de datos MongoDB
 * implementada con la tecnología NodeJS.
 */

const router = express.Router();

// Registro de usuario
router.post('/register', async (req, res) => {
    try {
        const user = await authService.register(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Inicio de sesión
router.post('/login', async (req, res) => {
    try {
        const token = await authService.login(req.body);
        res.status(200).json({ token });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
});

// Middleware de autenticación
export const authenticate = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    try {
        const user = authService.verifyToken(token);
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Authentication failed' });
    }
};

