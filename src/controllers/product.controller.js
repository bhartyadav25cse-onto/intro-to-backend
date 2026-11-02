import { Product } from "../models/product.model.js";

export const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
};

export const getProducts = async (req, res) => {
    try {
        res.status(200).json(await Product.find({}));
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};

export const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.status(200).json(product);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.status(200).json(product);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.status(200).json({ message: "Product deleted" });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};