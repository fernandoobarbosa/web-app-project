import express from 'express'
import Post from './models/post'
import User from './models/user'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'
import hash from 'object-hash'
import cors from 'cors'


const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

app.post('/verifyToken',verifyJWT,(req,res)=>{
    
    
})

app.post('/novoPost',verifyJWT, (req,res)=>{
    
    Post.insertMany([{titulo:req.body.titulo,categoria:req.body.categoria,
        corpo:req.body.corpo}]).then(()=>{
            
            res.send("Registro criado")
        }).catch(function(error){
            res.status(400).send("Erro")
        }
        )})
        
        app.get('/todos',verifyJWT,(req,res,next)=>{
            
            Post.find({},(err,posts)=>{
                
                res.send(posts)
                
            })
        })
        
        app.get('/post/:id?',verifyJWT,(req,res,next)=>{
            
            Post.findById(req.params.id,(err,registro)=>{
                if(registro==undefined){
                    res.status(400).send("Erro,registro não encontrado")
                }else{
                    res.send(registro)
                }
            })
        })
        
        app.delete('/deletar/:id', verifyJWT,(req, res,next)=>{
            
            Post.deleteOne({_id:req.params.id},(err)=>{
                
                if (err) res.status(400).send("Erro,registro não encontrado");
                
                
            })
            
        })
        
        app.put('/alterar/:id', verifyJWT,(req,res,next)=>{
            
            Post.updateOne({_id:req.params.id},{titulo:req.body.titulo,categoria:req.body.categoria,
                corpo:req.body.corpo},(err)=>{
                    
                    if (err) res.status(400).send("Erro,registro não encontrado")
                    
                    else{
                        res.send("registro alterado")
                    }
                    
                })                    
                
            })
            
            app.post('/login',(req, res) => {
                
                var nameHash = hash(req.body.name)
                var passwordHash = hash(req.body.password)
                
                User.findOne({name:nameHash,password:passwordHash},(err,result)=>{
                    
                    if(result!=null){
                        var id = result._id 
                        var token = jwt.sign({id},"keyTest",{ //verificação do token
                            expiresIn:300 //tempo do token 
                            
                        })
                        
                        return res.send({ auth: true, token: token })
                    }
                    else{res.status(401).send({message: 'Login inválido!'});
                }
                
            })
        })
        
        app.post('/criarUsuario', verifyJWT,(req,res)=>{
            
            console.log(req.body)
            
            var nameHash = hash(req.body.name)
            var passwordHash = hash(req.body.password)
            
            User.insertMany([{name:nameHash,password:passwordHash}],(err)=>{
                
                if(err) res.status(400).send("Erro no cadastro")
                else{
                    res.send("Cadastro criado")
                }
                
            })
            
        })
        
        function verifyJWT(req, res, next){
            var token = req.headers['x-access-token'];
            if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
            
            jwt.verify(token, "keyTest", function(err, decoded) {
                if (err) return res.status(401).send({ auth: false, message: 'Failed to authenticate token.' });
                
                // se tudo estiver ok, salva no request para uso posterior
                req.userId = decoded.id;
                next();
            });
        }    
        
        export default app