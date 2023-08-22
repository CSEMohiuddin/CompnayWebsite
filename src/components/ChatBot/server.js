export const response = async(input)=>{

    const stack_ai_url = "https://www.stack-inference.com/run_deployed_flow?flow_id=64ce8597b1b24074ca0bc908&org=f0fe73ad-2900-41cb-b8f5-1fe9a1b8ccae"
    const token = "6558584f-b2ef-474a-889f-a8e7ea2ce707"

    try{
        let res = await fetch(stack_ai_url,
            {
            headers: {'Authorization':
                `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({"in-0": input}),
            }
        )
        res = await res.json();

        let out = JSON.stringify(res)
        out = out.replace('-0', '')
        out = JSON.parse(out)

        return out



    }catch(error){
        console.log(error)
    }
}