module.exports= options=>{
  return async function adminAuth(ctx,next){
    // console.log(ctx.session.openId+'111111111')
    if(ctx.session.openId){
      await next();
    }else{
      ctx.body={data:'openId为空'}
    }

  }
}