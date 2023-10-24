const Post = require("../models/Post");
const mongoose = require("mongoose");

class PostController {

    static async getPosts (req,res)
    {
        
        try {
            const posts = await Post.find();
            if(posts.length==0) return res.status(200).json({msg:"Não existem postagens ainda"})

            return res.status(200).json(posts)
        } catch (error) {
            res.status(500).json({ msg: "Erro ao visualizar as postagens", status: false });
        }
    }

    static async createPost (req,res)
    {
            const teacherId = req.user_id;

            const { urlImage, title, category, description } = req.body;

            try {
                if (!urlImage || !title || !category || !description) return res.status(400).json({ msg: "Informe todos os campos!" });
                
                const newPost = new Post({
                    urlImage,
                    title,
                    category,
                    description,
                    teacher: teacherId, 
                });
        
                await newPost.save();
        
                res.status(201).json({ msg: "Postagem criada com sucesso", post: newPost });
            } catch (error) {
                console.error('Erro ao criar a postagem', error);
                res.status(500).json({ msg: "Erro ao criar a postagem", status: false });
            }
        }        

        static async getPost(req,res)
        {
            const { postId } = req.params;
            console.log(postId)
            try {

                if(mongoose.Types.ObjectId.isValid(postId)==false)
                {
                    return res.status(400).json({msg:"Requisição inválida"});
                }

                const post  = await Post.findOne({_id:postId})
                
                if(!post) return res.status(404).json({msg:"Postagem não encontrada"})

                return res.status(200).json(post);
                
            } catch (error) {
                console.error('Erro ao tentar obter a postagem:', error);
                res.status(500).json({ msg: 'Erro no servidor', status: false });
            }
        }
       
        static async deletePost(req, res) {
            const { postId } = req.params;
            const teacherId = req.user_id;
        
            try {
                if(mongoose.Types.ObjectId.isValid(postId)==false)
                {
                    return res.status(400).json({msg:"Requisição inválida"});

                }
                
                const removedPost = await Post.findOneAndRemove({ teacher: teacherId, _id: postId });

                if (!removedPost) {
                    console.log('Postagem não encontrada');
                    return res.status(404).json({ msg: 'Postagem não encontrada', status: false });
                }

                console.log('Postagem removida com sucesso', removedPost);
                return res.status(202).json({ msg: 'Postagem removida com sucesso', status: true });
                
            
            } catch (error) {
                console.error('Erro ao tentar remover o postagem:', error);
                res.status(500).json({ msg: 'Erro no servidor', status: false });
            }
        }
        

    static async updatePost (req,res)
    {
    const { postId } = req.params;
    const teacherId = req.user_id;
    const { urlImage, title, category, description } = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(postId)) {
            return res.status(400).json({ msg: "Requisição inválida" });
        }

        if(!title || !category || !description)
        {
            return res.status(403).json({ msg: "Preencha todos os campos! " });
        }

        const updatedPost = {
            urlImage,
            title,
            category,
            description,
        };

        const options = { new: true }; 

        const result = await Post.findOneAndUpdate(
            { teacher: teacherId, _id: postId },
            updatedPost,
            options
        );

        if (!result) {
            console.log('Postagem não encontrada');
            return res.status(404).json({ msg: 'Postagem não encontrada', status: false });
        }

        console.log('Postagem atualizada com sucesso:', result);
        return res.status(200).json({ msg: 'Postagem atualizada com sucesso', post: result });
         } catch (error) {
        console.error('Erro ao tentar atualizar a postagem:', error);
        res.status(500).json({ msg: 'Erro no servidor', status: false });
        }
    }

}

module.exports = PostController;