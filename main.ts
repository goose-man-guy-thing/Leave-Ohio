function Hell () {
	
}
function California () {
    adventure.addToTextlog("this doesnt exist californias dead remember")
}
function Nevada () {
	
}
function Pause_until_ANY () {
    pauseUntil(() => controller.anyButton.isPressed())
}
function Start () {
    adventure.setScoreOverride(adventure.Currency.Coins, 1)
    adventure.addToTextlog("You are in Ohio")
    scene.setBackgroundImage(assets.image`Ohio`)
    Pause_Until_A()
    adventure.addToTextlog("Your goal is to leave Ohio")
    Pause_Until_A()
    adventure.addToTextlog("You have 4 options for where to go:")
    Pause_Until_A()
    adventure.addToTextlog("Pennsylvania (Right arrow) ,Michigan (Up arrow) , Kentucky (Down arrow) ,and Indiana (Left arrow).")
    Pause_until_ANY()
    if (controller.left.isPressed()) {
        Indiana()
    } else if (controller.right.isPressed()) {
        Pensilvania()
    } else if (controller.up.isPressed()) {
        Michigan()
    } else if (controller.down.isPressed()) {
        Kentucky()
    }
}
function Michigan () {
    adventure.addToTextlog("A large sign says \"Welcome to Michigan\"")
    scene.setBackgroundImage(img`
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffff888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888f888888888888888888ffffffffffffff888888888888888888888
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffff888888fffff888fffffffffffffffff88888888888888888888
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888188888888888888888888fff888888ffffff888fffffffffffffffffff888888888888888888
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ff88f8888fffffff88ffffffffffffffffffffff8888888888888888
        8888888888888888888888888888888888888888888888888818888888888888888888888888888888888888888888888888888888888b8fffffffff8ffffffffffffffffffffffff888888888888888
        8888888888188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffff8ffffffffffff8888888fffff888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffff88ffffffffbb88888888888fff888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffff88fffffff88b88888888888fff888888881888888
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffff8ffffff888b88888888888fff888888888888888
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffff8888b888888888888ff888888888888888
        88888888888888888888888888ccccccccccccc88888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffff8888bb888888888888ff888888888888888
        888888888888888888888cccccccccccccccccccccccccccc8888888888888888888888888888888888888888888888888888888888ffffffff888ffffffff888b8888888888888ff888888888888888
        888888888888888888ccccccccccccccccccccccccccccccccc8888888888888888888888888888ccccccccc88888ccccccccccccc8ffffffff8888fffffffff8b8888888888888ff888888888888888
        8888888888888888cccccccccccccccccccccccccccccccccccc888888888888888888888888888ccccccccccccccccccccccccccccfffffff8888888fffffffff8888888888888f8888888888888888
        8888cccccccccccccccccccccccccccccccccccccccccccccccc888888888888888888888888888ccccccccccccccccccccccccccccffffff88888888ffffffffff888888888888b8888888888888888
        888ccccccccccccccccccccccccccccccccccccccccccccccccc888888888888888888888888888cccccccccccccccccccccccccccc88888888888888ffffffffffff8888888888b8888888888888888
        88cccccccccccccccccccccccccccccccccccccccccccccccccc888888888888888888888888888cccccccccccccccccccccccccccc88888888888888fff8fffffffff888888888b8888888888888888
        88cccccccccccccccccccccccccccccccccccccccccccccccccc888888888888888888888888888cccccccccccccccccccccccccccc88888888888888fff8bfffffffff88888888b8888888888888888
        88cccccccccccccccccccccccccccccccccccccccccccccccccc888888888888888888888888888ccccccccccccc8888ccccccccccc88888888888888fff8bbbfffffffff888888b8888888888888888
        88ccccccccccccccccccccccccccccccccccccccccccccccccc88888888888888888881888888888888888888888888888ccccccccc888888888888fffff888b.ffffffffff8888b8888888888888888
        88cccccccccccccccccccccccccccccc888888888cccccccc88888888888888888888888888888888888888888888888888888888888888888888888ffffff88b88fffffff88888b8888888888888888
        88cccccccccccccccccccccccc888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffff88b8888fffff88888b8888888888888888
        888ccccccccccccccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffff888bb88888ff888888b8888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffff88888bb888888888888b8888888888888888
        88888888888888888888888888888888888888888888888888ccccccccccccc8888888888888888888888888888888888888888888888888888888fffff8888888bb88888888888b8888888888888888
        8888888888888888888888888888888888888888888888cccccccccccccccccccccccc888888888888888888888888888888888888888888888888bffff88888888bb8888888888b8888888888888888
        88888888888888888888888888888888888888888888cccccccccccccccccccccccccccccc888888888888888888888888888888888888888888bb88888888888888bb888888888b8888888888888888
        88888888888888888888888888888888888888888888cccccccccccccccccccccccccccccc888888888888888888888888888888888888888888b8888888888888888b888888888b8888888888888888
        88888888888888888888888888888888888888888888cccccccccccccccccccccccccccccc88888888888888888888888888888888888888fffffff88888888888888b888888888b8888888888888888
        88888888888888888888888888888888888888888888cccccccccccccccccccccccccccccc88888888888888888881888888888888888888ffffffff8888888888888fffff88ffffff88888888888888
        88888881888888888888888888888888188888888888ccccccccccccccccccc8888888888888888888888888888888888888888888888888ffffffffff88888888fffff777ffffffff88888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffff8888888ffff7777ffffffff88888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffff77777ffffffff88888888888888
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffff77777fffffffff88888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff777b77fffffff8888888888888888
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffff77bb7ffffff8888888888888888888
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffff77fff77bb777ffff888888888888888888888
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffff7f77b777ffff88888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888ccccccc8888888888888888888888888888fffff7f77b777ffff88888888888888888888888
        88888888888888888888888888888cccccccccccccc88888888888888888888888888888888888888888cccccccccc88888888888888888888888888fffff777777f7ffff88888888888888888888888
        888888888888888888888888ccccccccccccccccccc888888888888888881888888888888ccccccccccccccccccccccccc8888888888888888888888ffff777777ff7fffff8888888888888888888888
        88888888888888888888888cccccccccccccccccccccc888888888888888888888888888cccccccccccccccccccccccccccccccccc888888888888888fff77777ffff7ffff8888888888888888888888
        8888888888888888888888cccccccccccccccccccccccc8888888888888888888888888cccccccccccccccccccccccccccccccccccc8888888888888877777777ffff77fff8888888888888888888888
        8888888888888888888888cccccccccccccccccccccccc888888888888888888888888cccccccccccccccccccccccccccccccccccccc8888888888888777777fffffff777f8888888888888888888888
        8888888888888888888888cccccccccccccccccccccccc888888888888888888888888cccccccccccccccccccccccccccccccccccccc8888888888888777777fffffffffff8888888888888888888888
        8888888888888888888888cccccccccccccccccccccccc888888888888888888888888cccccccccccccccccccccccccccccccccccccc888888888888877777fffffffffff88888881888888888888888
        8888888888888888888888cccccccccccccccccccccccc888888888888888888888888cccccccccccccccccccccccccccccccccccccc8888888888888ffffffffffffffff88888888888888888888888
        8888888888888888888888cccccccccccccccccccccccc888888888888888888888888cccccccccccccccccccccccccccccccccccccc88888888888888fffffffffffffff88888888888888888888888
        8888888888888888888888ccccccccccccccccccccccc8888888888888888888888888ccccccccccccccccccccccccccccccccccccc888888888888888fffffffffffffff88888888888888888888888
        88888888888888888888888888888888cccccccccccc88888888888888888888888888ccccccccccccccccccccccccccccccccccc88888888888888888fffffffffffffff88888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888cccccccccccccccccccccccccccccc8888888888888888888fffffff77ffffff88888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888ccccccccccccccccccccccc88888888888888888888888ffffffff77fffff88888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888ccccccccccc88888888888888888888888888888fffffffff77fffff8888888888888888888888
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffff7ffff8888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888777bbbbb77777ffff8888888888888888888888
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888877777777bb777ffff8888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888188888888888888888777777777bb7777ff8888888888888888888888
        88888888888888888888888888881888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffff7b7777778888888888888888888888
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffff7ff7777778888888888888888888888
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffff7ffff77778888888888888888888888
        88888888888888888888888888888888888888888888888888888881888888888888888888888888888888888888888888888888888888888888888888ffffff77fffff7778888888888888888888888
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffff77ffffffffff888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffff77fffffffffff888888888888888888888
        8888888888818888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffff77ffffffffffff888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffff888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888188888888888888888888888888888888888888888888ffffffffff7fffffff888888888888888888888
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffff88888888888888888888ffffffffff7777ff77788888888888888888888
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff888888888888888888ffffffffffffff7f77788888888888888888888
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffff88888888888888888ffffffffffffff7777788888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffff222222ffffff88888888888888888fffffffffffffff777788888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffff2222222222ffff88888888888888888fffffffffffffff777788888888888888888888
        8888888888888888888888888888ffff8888888888881888888888888888888888888888888888888888fffff222222222222fff88888888888888888ffffffffffffff7777ff8888888888888888888
        88888888888888888fffffffffffffff8888888888888888888888888888888888888888888888888888ffff2222222222222fff88888888888888888ffffffffffffff7777ff8888888888888888888
        88888888888888ffffffffffffffffff888888888888888888888888888888888888888888888888888fffff2222222222222fff88888888888888888fffffffffffff7777fff8888888888888888888
        8ffff888888fffffffffffffffffffff888888888888888888888888888888888888888888888888888ffff22222222222222fff88888888888888888fffffffffffff77b7ffff888888888888888888
        8ffffffffffffffffffbbbbbbbbbffff88888888888888888888888888888888888888888888888888ffff222222222222222fff88888888888888888fff7ffffffff77bbfffff888888888881888888
        8ffffffffffffffffbbbbbbbbbbbfff888888888888888888888888888888888888888888888888888ffff222222222222222fff88888888888888888fff7fffffbbbbbb7fffff888888888888888888
        88fffffffffffbbbbbbbbbbbbbbbfff888888888888888888888888888888888888888888888888888fff2222222222222222fff88888888888888888fff7fff777777777fffff888888888888888888
        88fffbbbbbbbbbbbbbbbbbbbbbbbffff8888888888888888888888888888888888888888888888888ffff2222222222222222ffff88888888818888777ff777777777777fffffff88888888888888888
        88fffbbbbbbbbbbbbbbbbbbbbbbbffff8888888888888888888888888888888888888888888888888ffff2222222222222222ffff88888888888888777777777777777fffffffff88888888888888888
        88fffbbbbbbbbbbbbbbbbbbbbbbbffff888888888888ffff888888888888888888888888888888888fff222222222222222222ffff88888888888887777777b777ffff77fffffff88888888888888888
        88fffbbbbbbbbbbbbbbbbbbbbbbbbfff888888888888fffff8888888888888888ffffffff88888888fff222222222222222222ffff888888888888877777777ffffffff77fffffff8888888888888888
        88fffbbbbbbbbbbbbbbbbbbbbbbbbffff88888888888fffffffffffffffffffffffffffff88888888fff222222222222222222ffff88888888888888fffffffffffffffff77fffff8888888888888888
        88fffbbbbbbbbbbbbbbbbbbbbbbbbffff8888888888ffffffffffffffffffffffffffffff88888888fff2222222222222222222fff88888888888888fffffffffffffffffffffffff888888888888888
        88ffffbbbbbbbbbbbbbbbbbbbbbbbbfff8888888888ffffffffffffffffffffffffeeffff88888888fff2222222222222222222fff88888888888888fffffffffffffffffffffffff888888888888888
        88ffffbbbbbbffffffffbbbbbbbbbbfff8888888888fffeeeeeeeeeeeeeeeeeeeeeeeffff88888818fff2222222222222222222fff88888888888888ffffffffff77fffffffffffff888888888888888
        88ffffbbbbbffffffffffffbbbbbbbfff8888888888fffeeeeeeeeeeeeeeeeeeeeeeefff888888888fff2222222222222222222fff8888888888888fffffffffff7ffffffffffffff888888888888888
        888fffbbbbbffffffffffffbbbbbbbfff8888888888fffeeeeeeeeeeeeeeeeeeeeeeefff888888888fff222222fffffff222222fff888888888888fffff7ffffff77fffffffffffff888888888888888
        888fffbbbbbffff333ffffffbbbbbbffff888888888fffeeeeeeeeeeeeeeeeeeeeeeefff888888888fff2222ffffffffff22222fff888888888888ffff77fffffff7fffffffffffff888888888888888
        888fffbbbbbfff333333ffffbbbbbbffff888888888fffeeeeeeeeeeeeeeeeeeeeeeefff888888888fff222ffffffffffff2222fff888888888888ffff7ffffffff7ffffffffffffff88888888888888
        888fffbbbbbfff333333ffffbbbbbbbfff888888888fffeeeffffeeeeeeeeeeeeeeeefff888888888fff22ffffffbbfffff2222fff888888888888fff77ffffffff7fffffffffffffff8888888888888
        888fffbbbbbfff3333333fffbbbbbbbfff888888888fffeeefffffffffffffffffeeefff888888888fff22ffffbbbbbfffff222fff888888888888777fffffffff77777fffffffffffff878888888888
        888fffbbbbbfff3333333fffbbbbbbbfff888888888fffeeefffffffffffffffffeeefff888888888fff22fffbbbbbbbffff222fff88888888888f7777fffffff77777777fffffffffff878888888888
        888fffbbbbbfff333fff3fffbbbbbbbffff88888888fffeeefffffffffffffffffeeefff888888888fff22fffbbbbbbbffff222fff8888888888ff777777fff77777777777fffffffffff78888888888
        888fffbbbbbfff333fff3fffbbbbbbbffff88888888fffeeefffbbbbbbbbbbffffeeefff888888888fff22fffbbbfffbbfff222fff888888888fff7777777777b777f7777bbbfffffffff78888888888
        888fffbbbbbfff333fff3fffbbbbbbbffff88888888fffeeefffbbbbbbbbbbffffeeefff888888888fff22fffbbbfffbbfff222fff8888888ffffff77777bbbbb77ffff77777bbfffffff7f888888888
        888fffbbbbbfff3333333fffbbbbbbbbfff88888888fffeeefffbbbbbbfffbfffeeeefff888888888fff22fffbbbfffbffff222fff8888888fffffffff77b7777ffffff777777bbffffff7fff8888888
        888fffbbbbbffff333333fffbbbbbbbbfff88888888fffeeefffbbbbbbfffbfffeeeefff888888888fff22fffbbbbbbbffff222fff888fffffffffffffffffffffffff7ff77777b77fffff7777888888
        888fffbbbbbffff333333fffbbbbbbbbfff88888888fffeeefffbbbbbbfffbffffeeefff888888888fff22fffbbbbbbbffff222fff888ffff77777fffffffffffffff777fff777777777777777888888
        888fffbbbbbffff33ccccfffccccccccfffcccccc88fffeeefffbbbbbbbbbbffffeeefff888888888fff2cfffcccccccfffcccccccc88ffffffff7ffffffffffffff77fffffff7777777777777ff8888
        888fffbbbbbbfffccccccccccccccccccccccccccccfffccefffbbbbbbbbbbffffeeefff8888888ccfffcccccccccccccccccccccccccfffff.ff7fffffffffffff77ffffffffff77777777777778888
        888fffbbccccfffcccccccccccccccccccccccccccccccccccccccccccccccccccccefff888ccccccccccccccccccccccccccccccccccfffffff777ffffffffffffffffffffffffff7ff...ffb778888
        cccfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffccccccccccccccccccccccccccccccccccccccccccf7777ffcccccccffffffcccfffffcfff7ffccff777cccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf7777fcccccccfffffffcccfffffcfff7ffccfffffcccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf77777fcccccccfffffffcccfffffcfff7ffffccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff7777fccccccccfffffffcccfffffcfff77fffccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff77b7fccccccccffffffcccccccccccfff77ffccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff77b7fccccccccff7ffccccccccccccfffffffccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff77b7cccccccccff7ffffcccccccccccffffffccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccff77777cccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccffff77bcccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffff777cccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffcccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        `)
    Pause_Until_A()
    adventure.addToTextlog("You decide to head to the one city you heard about in Michigan, Detroit.")
    Pause_Until_A()
    adventure.addToTextlog("As you enter the city you notice something very strange...")
    Pause_Until_A()
    adventure.addToTextlog("All of your money has disappeared.  ")
    adventure.setScoreOverride(adventure.Currency.Coins, 0)
    Pause_Until_A()
    adventure.addToTextlog("And as you look around, you notice that no one has anything.")
    Pause_Until_A()
    adventure.addToTextlog("And all the housing seems to be simple communal shelters.")
    Pause_Until_A()
    adventure.addToTextlog("Oh no, Its COMMUNIST DETROIT, hopefully you can make it through okay.")
    Pause_Until_A()
    adventure.addToTextlog("The gates close behind you and won't open again, your going to have to find another way out.")
    Pause_Until_A()
    adventure.addToTextlog("You have some options, you could go to the homeless shelter (Left), into a dark alleyway ")
    Pause_until_ANY()
    if (controller.left.isPressed()) {
        adventure.addToTextlog("")
    } else if (controller.right.isPressed()) {
    	
    } else if (controller.up.isPressed()) {
    	
    } else if (controller.down.isPressed()) {
    	
    }
    adventure.addToTextlog("")
    Pause_Until_A()
    adventure.addToTextlog("")
    Pause_Until_A()
    adventure.addToTextlog("")
    Pause_Until_A()
    adventure.addToTextlog("")
    Pause_Until_A()
    adventure.addToTextlog("")
    Pause_Until_A()
    adventure.addToTextlog("")
    Pause_Until_A()
    adventure.addToTextlog("")
    Pause_Until_A()
    adventure.addToTextlog("")
    Pause_Until_A()
    adventure.addToTextlog("")
    adventure.addImageToTextLog(img`
        ...eddd5.4......................................................
        ..edd5de4..4....................................................
        .edd5e.de14.....................................................
        .ed5e.e.de5.....................................................
        .e5e.e.e.d4.....................................................
        .ed1e.e.e.4.....................................................
        .eed1e.e.ed5....................................................
        .4eed1e.eded5...................................................
        4..eee1ededed5..................................................
        ..4.eeedededed1.................................................
        .4....eededede51................................................
        .......eedede4ed1...............................................
        ........eede4ede51..............................................
        .........eedede4ed1.............................................
        ..........eede4ede51............................................
        ...........eedede4ed1...........................................
        ............eede4ede51..........................................
        .............eedede4ed1.........................................
        ..............eede4eded1........................................
        ...............eedededed1.......................................
        ................eedededed5......................................
        .................eedededed5.....................................
        ..................eedededed5....................................
        ...................eedededed544444444455555.....................
        ....................eededededdddddddddddddd51...................
        .....................eededededdddddddddddddd441.................
        ......................eededededddddddddddddddd44................
        .......................eededededdddddd5ddddddddd4...............
        .......................eeddedededdddddddd5ddddddd4..............
        .......................eedddedededeeeeddddddddddd4..............
        .......................eeddddedede4444eddddddddddd4.............
        .......................eedddddede4eccc4edd5ddddddd4.............
        .......................eedddddde4ececcc4edddddddddd4............
        .......................eeddddde4ecececc4edddddddddd5............
        .......................eeddddde4cececec4edddddddddd5............
        .......................eeddddde4ccecece4eddddddd4dd5eeee........
        .......................eeddd5dee4ccececeddddddd5ddd4ddde5e......
        .......................eeddddddde4ccecededddddddddddddddd55.....
        .......................eedddddddde444edededdd4dddddddddddd55....
        .......................eeddddddddeeeedededed5dddddddddddddd55...
        .......................eeddd5ddddddddddedededddddddddddddddde5..
        .......................eeedddddd5dddddddedededddddddddddddddde5.
        ........................eedddddddddddddddedededddddddddddddddd55
        ........................eeeddddddddddddd4dedededdddddddddddddde5
        .........................eeddddddddddddddddedededdddddddddddddd4
        .........................eeedddddddddd5dddddedededddddddddddddd4
        ..........................eeeddddddddddddddddedededdddddddddddd4
        ...........................eeeeddddd4dddddddddededefddddddddddd4
        ............................eeeeeddddddddddddddedefeddddddddddd4
        ..............................eeeeddddddddddddddefedddddddddddde
        ................................eeddddddddddddddfeddddddddddddee
        .................................eeddddddddddddddddddddddddddee.
        .................................eedddddddddddddddddddddddddeee.
        .................................eeddddddddddddddddddddddddeee..
        .................................eeeddddddddddddddddddddddeee...
        ..................................eedddddddddddddddddddddeee....
        ..................................eeedddddddddddddddddddeee.....
        ...................................eeddddddddddddddddddeee......
        ...................................eeeddddddddddddddddeee.......
        ....................................eeeddddddddddddddeee........
        .....................................eeeddddddddddddeee.........
        ......................................eeeddddddddddeee..........
        .......................................eeeeeeeeeeeeee...........
        ........................................eeeeeeeeeeee............
        `)
}
function Ohiofication () {
    adventure.addImageToTextLog(assets.image`tentacle`)
}
function Iowa () {
	
}
function Pause_Until_A () {
    pauseUntil(() => controller.A.isPressed())
}
function NYC () {
	
}
function Pensilvania () {
    adventure.addToTextlog("A large sign says \"Welcome to Pennsylvania\"")
    Pause_Until_A()
}
function Illinois () {
	
}
function Death () {
	
}
function Kentucky () {
    adventure.addToTextlog("A large sign says \"Welcome to Kentucky\"")
    Pause_Until_A()
    adventure.addToTextlog("Upon entering the state, you are almost instantly teleported to a infinite KFC!")
    scene.setBackgroundImage(img`
        1111112222222111111111111122222222211111111111111122222221111111111111112222222111111111222222222111111111112222222211111111111122222221111111111111122222211111
        1111112222222111111111111122222222221111111111111122222221111111111111112222222111111111222222222211111111112222222211111111111122222221111111111111122222221111
        1111112222222111111111111122222222221111111111111122222221111111111111112222222111111111222222222211111111112222222211111111111122222221111111111111122222221111
        1111112222222111111111111122222222221117777711111122222221111111111111112222222111111111222222222211111111112222222211111111111122222222111111111111122222221111
        11111122222221111111111111222222222211177777111111222222211111111111111122222221111111112222222bbbbbbbbbbbbbbbbb222221111111111122222222111111111111122222221111
        1111112222222111111111111122222222221117777711111122222221111111111111112222222111111111222222bbbbbbbbbbbbbbbbbbb22221111111111122222222111111111111122222221111
        11111122222221111111111111222222222211177777177777222222211111111111111122222221111111112222bbbbbbbbbbbbbbbbbbbbbbbb22111111111122222222111111111111122222221111
        11111122222221111111111111222222277777777777177777222222211111111111111122222221111111112222bbbbbbbbbbbbbbbbbbbbbbbbbb111111111122222222111111111111122222221111
        1111112222222111111111111112222227777777777717777722222221111111111111112222222111111111122bbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111122222222111111111111122222221111
        1111112222222111111111111112222227777777777777777722222221111111111111112222222211111111122bbbbffffffbbbbbbbbbfffffffbbb1111111122222222111111111111122222221111
        1111112222222111111111111111222227777777777777777722222221111111111111112222222211111111122bbbbfffffffffbbbbbfffffffffbb1111111122222222211111111111122222221111
        1111122222222111111111117777777727777777777777777722227777777111111111112222222211111111122bbbbfffffffffbbbfffffffffffbb1111111122222222211111111111122222221111
        1111122222222111111111117777777777777777777777777727777777777111111111112222222211111111122bbbbfffffffffbbbfffffffffffbb1111111122222222211111111111122222221111
        1111122222222111111111117777777777777777777777777777777777777111111111112222222221111111122bbbbfffffffffbbbfffffffffffbb1111111122222222211111111111122222221111
        11111222222221111111111177777777777777777777777777777777777771111111111122fff22221111111122bbbbfffffffffbbbfffffffffffbb1111111112222222211111111111122222221111
        11111222222221111111111177777777777777777777777777777777777771111111111122fff22221111111122bbbbfffffffffbbbfffffffffffbb2111111112222222211111111111122222221111
        11112222222221111111111177777777777777777777777777777777777111111111111122ffffffffff1111122bbbbfffffffffbbbfffffffffffbb2111111112222222211111111111122222221111
        11112222222221111111111111112777777777777777777777777777221111ffffffff1122ffffffffff1111122bbbbffffffffbbbbbbbffffffffbb2111111112222222221111111111122222221111
        111122222222211111111111111122777777777777777777777777222211ffffffffff1112ffffffffff1111122bbbbbbbbbbbbbbbbbbbbbbbbbbbbb2111111112222222221111111111122222221111
        111122222222211111111111111122277777777777777777777722222211ffffffffff1112fffffff1111111122bbbbbbbbbbbbbfbbbbbbbbbbbbbbb2111111112222222221111111111122222221111
        11112222222221111111111111112227777777777777777771222222222fffff111fff1112ffff22211111111222bbbbbbbbbbbbfbbfbbbbbbbbbbbb2111111112222222221111111111122222221111
        11112222222221111111111111112222222227777777777771222222222ffff1111fff1112ffff222111111112222bbbbbbbbbbbbbbfbbbbbbbbbbbb2111111112222222221111111111122222221111
        11112222222221111111111111112222222221777777777711222222222fffff11ffff1112ffff222111111111222bbbbbbbbbbbbbbbbbbbbbbbbbbb2111111112222222221111111111122222221111
        111122222222211111111111111122222222211777777771112222222221ffffffffff11122fff2221111111112222bbbbbbbbbbbbbbbbbbbbbbbbbb2111111111222222221111111111122222222111
        1111222222222111111111111111222222222117777777111112222222211ffffffff111122fff22211111111122222bbbbbbbbbbbbbbbbbbbbbbb222111111111222222221111111111122222222111
        11112222222221111111111111112222222221117777771111122222222111ffffff111112222222211111111122222bbbbbbbbbbbbbbbbbbbbbbbb22111111111222222221111111111122222222111
        1111222222222111111111111111222222222211177777111112222222211111111111111222222221111111112222bbbbbb111bbbbbbb12bbbbbbb22111111111122222221111111111122222222111
        1111222222222111111111111111222222222211177777111112222222211111111111111222222221111111112222bbbbbb111bbbbbbb12bbbbbbb22211111111122222221111111111122222222111
        1111222222222111111111111111222222222211177777111112222222211111111111111222222221111111112222bbbbbb111bbbbbbb12bbbbbbb22211111111122222221111111111122222222111
        1111122222222111111111111111222222222211177777111112222222211111111111111222222221111111112222bbbbbb111bbbbbbb12bbbbbbb22211111111122222221111111111122222222111
        cccccc2222222111111111111111222222222211177777111112222222222111111111111222222221111111112222bbbbbb111bbbbbbb122bbbbb2222111111111222222211111111111222222ccccc
        cccccc22222221111111111111112222222222111777771111122222222221111111111112222222211111111122222bbbbb1111bbbbbb122bbbbb222211111111122222221111111111122222cccccc
        ccccccccccccc1111111111111112222222222111111111111122222222221111111111112222222211111111122222222211111111111122222222222111111111222222211111111111ccccccccccc
        bbbbcccccccccccccccccccccccc2222222222cccccc111111122222222221111111111112222222211111111122222222211111111111122222222222111111111222222211111111cccccccccccbbb
        bbbbccccccccccccccccccccccccccccccccccccccccccc111122222222221111111111112222222211111111122222222211111111111122222222222111111111222222211111ccccccccccccbbbbb
        bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccc2222222211111111111122222222111111111222222222111111111111222222222cccccccccccccccccccccccccccccccbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeee555eeeeebbbbbbbbbbbbbbb
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeeeee55e5eeeeeccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeeeee5ee5eeeeeccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeeee55ee5eeeeeccccccccccccccc
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccceeeeeeeeeeeeee5eee5eeeeeeccceeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccceeeeeeeeeeeee55eee5eeeeeeccceeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeeeee5555555eeeeeccceeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeeeee5555555eeeeeccceeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeeeee5555f55eeeeeccceeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeeeee5555555eeeeeccceeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeee
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeee
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeccceeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeee
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccceeebbbbbbbbbbbbbbbbbbbeeebbbbbeeeeeeeee
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeebbbbbbbbbbbbbbbbbbbeeebbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        eeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        eeebbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        eeebbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        eeebbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        eeebbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccccccceeeccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        eeebbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccccccceeeccccccccccccccccccccccccccccccccccc1111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        eeebbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccccccceeeccccccccccccccccccccccccccccccccc111fff111ccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        eeebbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeecccccceeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbeeebbbbccccccccccccccccccccccccccccc111fff111ccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        eeebbbbbbbbeeeeeeeeeeeeeeeceeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111fff111ccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        eeebbbbbbbbbbbcccccccccbbbbeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbb5555511111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        eeebbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeebeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbccc5511111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        eeebbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbb5555511111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        eeebbbeeeeebbbbbbbbbbbbbbbbeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb22211111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        eeeeeeeeeeebbbbbbbbbbbbbbbbeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb222111111cccccc11bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        eeeeeeeeeeebbbbbbbbbbbbbbbeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbeeebbbbbbeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb2221111111111c111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        eeeeeeeeeeebbbbbbbbbbbbbbbeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeebbbeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111c1111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        eeebbbbeeebbbbbbbbbbbbbbbeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111c111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        eeebbbbeeebbbbbbbbbbbbbbeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111c11bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        eeebbbbeeebbbbbbbbbbbbbbeeeeebbeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeebeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        eeebbbeeeebbbbbbbbbbbbbeeeeebbbeeeeeeeebbbbbbbbbbbbbbbeeebbbbbbbbeeebbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb555bb555bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        eeebbbeeeebbbbbbbbbbbbeeeeebbbbeeebeeeeebbbbbbbbbbbbbbeeeebbbbbbbeeebbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb555bb555bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        eeebbbeeebbbbbbbbbbbeeeeeebbbbbeeebbeeeeeeebbbbbbbbbbbeeeebbbbbbbeeebbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc5c5bbc5cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        eeebbbeeebbbbbbbbeeeeeeeebbbbbbeeebbeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeebbbbbbbbeeebbbbbbbccccccccccccccccccbbbbbbbbbbcccccccccccccccccccccccccccccccbbbbbbbbbbbbbbb
        eeebbbeeebbbbbbeeeeeeeeebbbbbbbeeebbbbeeeeeeeeeeeeeeeeeeeebbbbbcceeecccccccceeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbb
        eeebbbeeebbeeeeeeeeeeebbbbbbbbbeeebbbbbbeeeeeeeeeeeeeeeeccccccccceeecccccccceeeccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccb
        eeebbbeeebbeeeeeeeebbbbbbbbbbbeeeebbbbbbbbbbbbcccccccccccccccccccccccccccccceeecccccccccbbbbbbbbbbbbbbccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccb
        eebbbbeeebbeeeeeebbbbbbbbbbbbbeeeebbbbbccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccb
        eebbbbeeebbbbbbbbbbbbbbbbbbbbbeeeecccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        eebbbbbbbbbbbbbbbbbbbbbbbbbcceeeecccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbccccccccceeeeccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbccccccccceeeecbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbccccccccceeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `)
    Pause_Until_A()
    adventure.addToTextlog("The endless red and white walls invoke a feeling of immense dread.")
    Pause_Until_A()
    adventure.addToTextlog("The only server at a counter says in a monotone voice; \"Sir may I take your order?\".")
    Pause_Until_A()
    adventure.addToTextlog("You look up to see that the menu has only 2 options, death and escape.")
    Pause_Until_A()
    adventure.addToTextlog("Which do you choose, Death (Up), or Escape (Down)")
    Pause_until_ANY()
    if (controller.up.isPressed()) {
        adventure.addToTextlog("Turns out it was opposite day! As you begin to go insane a strange portal opens up in front of you.  ")
        effects.confetti.startScreenEffect()
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
        effects.confetti.endScreenEffect()
        adventure.addToTextlog("Do you go through it? Yes (Up) No (Down)")
        Pause_until_ANY()
        if (controller.up.isPressed()) {
            Wisconsin()
        } else if (controller.down.isPressed()) {
            adventure.addToTextlog("The portal senses your decision and closes, eventually you go insane and the shadows consume your soul.  ")
        }
    } else if (controller.down.isPressed()) {
        adventure.addToTextlog("Turns out it was opposite day, you are trapped there forever and your soul is consumed by the shadows. ")
        Pause_until_ANY()
        game.setGameOverEffect(false, effects.melt)
        game.gameOver(false)
    }
}
function Wisconsin () {
    adventure.addToTextlog("As you go through the portal it closes behind you, in front of you is a sign saying \"Welcome to Wisconsin!\" ")
    scene.setBackgroundImage(assets.image`foresss`)
    Pause_Until_A()
    adventure.addToTextlog("You check your surroundings and notice a lack of wildlife in the forest, no birds chirping or rabbits rustling the leaves.  ")
    Pause_Until_A()
    adventure.addToTextlog("Behind you is a strange field of light, on closer inspection it appears to be a solid barrier.")
    Pause_Until_A()
    adventure.addToTextlog("When you turn around a strange man is standing behind you holding a small bag, he has a very unkempt beard and is covered in dirt, it seems as if he is so close you can feel his body heat. ")
    Pause_Until_A()
    adventure.addToTextlog("He says at a volume barely loud enough for you to hear him; \"Hello foreigner, would you like to try some cheese I made?\"")
    Pause_Until_A()
    adventure.addToTextlog("He holds the bag up, clearly indicating that the cheese is in it. What do you do? Accept the cheese (Up) Ask if it is Velveeta cheese (Down) Decline the cheese (Left) ")
    Pause_until_ANY()
    if (controller.up.isPressed()) {
        adventure.addToTextlog("The cheese tastes of pure happiness, putting you into a state of wonderful bliss, you are so happy that you ascend to heaven.")
        Pause_Until_A()
        adventure.addToTextlog("But as you feel happiness for the first time in your miserable life, it fades away the clouds begin to fall as heaven is converted into Ohio.")
        Pause_Until_A()
        adventure.addToTextlog("Being in the sky and unable to leave and unable to leave, you soon succumb to Ohio's overwhelming power.")
        Ohiofication()
        Pause_Until_A()
        game.setGameOverEffect(false, effects.splatter)
        game.gameOver(false)
    } else if (controller.down.isPressed()) {
        adventure.addToTextlog("Upon the very mention of Velveeta the mans skin melts away, revealing a firey and glowing inside. ")
        Pause_Until_A()
        adventure.addToTextlog("Before you have time to react, the man, now turned demon, lunges forward with his hand held outwards.")
        Pause_Until_A()
        adventure.addToTextlog("His hand goes straight through your chest, as it pulls it hand back through you can see your inner organs spilling out of you, all burning with a unnatural flame.")
        Pause_Until_A()
        adventure.addToTextlog("It is absolute agony, with its hands piercing your body in many places, yet somehow without the release of death.")
        Pause_Until_A()
        adventure.addToTextlog("Eventually, after hours of suffering, the demon grabs your neck and swipes its hand upwards, ripping the flesh off your skull and then crushing it.")
        Pause_Until_A()
        adventure.addToTextlog("You instantly die.")
        Pause_Until_A()
        game.setGameOverEffect(false, effects.slash)
        game.gameOver(false)
    } else if (controller.left.isPressed()) {
        adventure.addToTextlog("The man insists you try his cheese, you hold your ground.")
        Pause_Until_A()
        adventure.addToTextlog("The man seems to start becoming angry, his face starting to turn red, although he quickly calms down. ")
        Pause_Until_A()
        adventure.addToTextlog("\"Fine\" says the man \"Keep on going, there's a exit just up ahead\"")
        Pause_Until_A()
        adventure.addToTextlog("You have 4 options;Michigan (Right) Iowa (Left) Illinois (Down) Minnesota (Up) ")
        Pause_until_ANY()
        if (controller.left.isPressed()) {
            Iowa()
        } else if (controller.right.isPressed()) {
            Michigan()
        } else if (controller.up.isPressed()) {
            Minnisota()
        } else if (controller.down.isPressed()) {
            Illinois()
        }
    }
    adventure.addToTextlog("")
}
function Wyoming () {
    adventure.addToTextlog("You see ahead of you a large rectangular pit instead of a state.")
    scene.setBackgroundImage(assets.image`wyoming moment`)
    Pause_Until_A()
    adventure.addToTextlog("You don't know why or how this is, but you decide to check it out.")
    Pause_Until_A()
    adventure.addToTextlog("You fell in.")
    Hell()
}
function Indiana () {
    adventure.addToTextlog("A large sign says \"Welcome to Indiana\"")
    Pause_Until_A()
}
function Minnisota () {
    adventure.addToTextlog("In front of you is a sign that says \"Welcome to minnesota\"")
    scene.setBackgroundImage(assets.image`mini soda`)
    Pause_Until_A()
    adventure.addToTextlog("As you look around, it seems to be barren snowy wastes as far as you can see")
    Pause_Until_A()
    adventure.addToTextlog("Other than that forest")
    adventure.addToTextlog("Press left to proceed to the field and right for forest")
    Pause_until_ANY()
    if (controller.left.isPressed()) {
        adventure.addToTextlog("You proceed into the field. A polar bear approaches you")
        Pause_Until_A()
        adventure.addToTextlog("He offers you a mini soda, but it seems to be frozen solid. Do you accept? ")
        adventure.addToTextlog("(A) To accept, (B) To decline")
        Pause_until_ANY()
        if (controller.A.isPressed()) {
            adventure.addToTextlog("You gladly accept! You try to drink the soda, but a solid mass of ice comes out. You choke and die.")
            Pause_Until_A()
            game.setGameOverEffect(false, effects.dissolve)
            game.gameOver(false)
        } else if (controller.B.isPressed()) {
            adventure.addToTextlog("The bear becomes enraged and claws you to bits. You die.")
            Pause_Until_A()
            game.setGameOverEffect(false, effects.slash)
            game.gameOver(false)
        }
    } else if (controller.right.isPressed()) {
        adventure.addToTextlog("You wander through the woods for a while and you see a small shed")
        Pause_Until_A()
        adventure.addToTextlog("Do you enter the shed? It is very cold out after all. A to go in, B to turn around.")
        Pause_until_ANY()
        if (controller.A.isPressed()) {
            adventure.addToTextlog("Inside the shed you see a teleportation pad.")
            Pause_Until_A()
            adventure.addToTextlog("You think any place would be better than here, so without thinking you step on it.")
            Pause_Until_A()
            adventure.addToTextlog("A flash of bright light engulfs you. Upon reopening your eyes you see something shocking.")
            Pause_Until_A()
            UnOhio()
        } else if (controller.B.isPressed()) {
            adventure.addToTextlog("Why would you do that? It's so cold out. You freeze and die.")
            Pause_Until_A()
            game.setGameOverEffect(false, effects.clouds)
            game.gameOver(false)
        }
    }
}
function UnOhio () {
    scene.setBackgroundImage(assets.image`unohio`)
    adventure.changeLogColors(2, 3)
    adventure.addToTextlog("Maple trees and pools of ice are scattered everywhere. It seems you're in Canada!")
    Pause_Until_A()
    adventure.addToTextlog("You heard about this place somewhere before. It's UN-OHIO!!! Ohio can never come here!!!!!!")
    game.setGameOverEffect(true, effects.confetti)
    game.setGameOverMessage(true, "What the heck? You actually did it!")
    game.gameOver(true)
}
adventure.addToTextlog("Hello there! Press (A) to continue once done reading. Have fun! ")
Pause_Until_A()
Start()
