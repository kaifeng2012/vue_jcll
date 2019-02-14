<template>
	<div>
		<div id="form">
    <!--<div class="signUpHead">-->
        <!--<input type="hidden" id="actName"/>-->
        <!--<div class="actName">-->
            <!--&lt;!&ndash;<span>活动名称</span>&ndash;&gt;-->

            <!--&lt;!&ndash;<h1>老年针灸体验和讲座</h1>&ndash;&gt;-->
        <!--</div>-->

    <!--</div>-->
    <input type="hidden" id="actName"/>
    <input type="hidden" id="activityId"/>
    <input type="hidden" id="jifen"/>
    <ul id="listItem" class="signUp">
        <li class="actName"><label for="actName">活动名称：</label><input type="text" name="actName" value="报名" id="actName1"/> </li>
        <li class="nickName"><label for="nickName">昵称：</label><input type="text" name="nickName" value="你好"
                                                                       id="nickName"/></li>
        <li class="user_name"><label for="user_name">姓名：</label><input type="text" name="user_name" value="美食"
                                                                      id="user_name"/></li>
        <li class="mobilephone"><label for="mobilephone">手机号：</label><input type="text" name="mobilephone"
                                                                           value="13122863306"
                                                                           id="mobilephone"/></li>
        <li class="jifen">奖励/扣除积分:<span>111</span></li>
        <li class="postscript">
            <label for="textContent">附言:</label>
            <textarea rows="5" cols="20" style="width:100%;" id="textContent" placeholder="请输入……" ></textarea>
        </li>
        <li class="explain">说明:</li>
        <li class="explainTxt">一旦发起报名后，如果不能按时参加活动，您的诚信记录将被降低，谢谢配合！</li>
        <!--<li id="btn">-->
            <!--<button class="cancel">取消</button>-->
            <!--<button class="confirmation">确认报名</button>-->
        <!--</li>-->
    </ul>


</div>
<br/>

<div id="list">
</div>
<!-- 报名审核中弹出框-->
<div class="model">
    <div class="modelBox">
        <div class="modelTxt">
            <img src="../../image/activity/wrong.png" class="close" alt=""/>
            <img src="../../image/activity/right0.jpg" class="right" alt=""/>

            <h1>报名审核中</h1>

            <p>您已完成在线报名</p>

            <p>请等待工作人员和你确认信息</p>

            <p>您可以进入"个人中心"查看进度，谢谢！</p>

            <div class="btn1">
                <button class="myCenter">进入个人中心</button>
                <button class="backIdx">返回首页</button>
            </div>
        </div>

    </div>
</div>
<!--页脚-->
<footer id="signfoot">
    <a href="../index/index.html" class="index  active">
        <img src="../../image/activity/back0.png" alt=""/>
        <span>返回</span>
    </a>
    <a href="" class="activity  active confirmation">
        <!--<img src="../../image/activity/btnBg.png" alt=""/>-->
        <span>确认报名</span>
    </a>

</footer>
	</div>
</template>
<style type="text/css">
  @import '../../assets/css/signUp.css'
  
   
</style>
