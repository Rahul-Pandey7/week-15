from flask import Flask
from flask import request
import json
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from bson.json_util import dumps
app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/"
mongo = PyMongo(app)

data=[]
@app.route('/addteam', methods=['POST'])
def add_team():
    items=request.json["name"]
    
    fl = open("team.txt", "a")
    fl.write(items + "\n" )
    fl.close()
    # data.append(items)
    return json.dumps({"message":"team added"})

@app.route('/team')
def show():
    items=[]
    fl=open('team.txt')
    for i in fl:
        items.append(i)
        
    print(items)
    fl.close()
    # data.append(obj)
    return json.dumps({"team":items})

@app.route('/team_details')
def team_details():
    items=[]
    fl=open('team.txt')
    for i in fl:
        items.append(i)
        
    print(items)
    fl.close()
    # data.append(obj)
    return json.dumps({"team":items})

@app.route('/player/<string:team_name>', methods=['POST'])
def add_player(team_name):
    items=request.json["p1"]+" "+request.json["pr1"]+" "+team_name+"\n"+ request.json["p2"]+" "+request.json["pr2"]+" "+team_name+"\n"+ request.json["p3"]+" "+request.json["pr3"]+" "+team_name+"\n"+ request.json["p4"]+" "+request.json["pr4"]+" "+team_name+"\n"+ request.json["p5"]+" "+request.json["pr5"]+" "+team_name+"\n"+ request.json["p6"]+" "+request.json["pr6"]+" "+team_name+"\n"+ request.json["p7"]+" "+request.json["pr7"]+" "+team_name+"\n"+ request.json["p8"]+" "+request.json["pr8"]+" "+team_name+"\n"+ request.json["p9"]+" "+request.json["pr9"]+" "+team_name+"\n"+ request.json["p10"]+" "+request.json["pr10"]+" "+team_name+"\n"+ request.json["p11"]+" "+request.json["pr11"]+" "+ team_name
    
    fl = open("team_member.txt", "a")
    fl.write(items + "\n" )
    fl.close()
    return json.dumps({"message":"player added"})


@app.route('/details/<string:team_name>')
def show_details(team_name):
    sign=[]
    data1=[]
    fl_new=open("team_member.txt")
    for i in fl_new:
        if team_name in i:
            sign=i.split()
            obj={
                "p1":sign[0],
                "pr1":sign[1]
            }
            data1.append(obj)
            # data1.append(sign[1])
    print(data1)
    fl_new.close()
    return json.dumps({"data":data1})  

@app.route('/add_fixture', methods=['POST'])
def add_fixture():
    match= request.json["team_1"]+" "+request.json["team_2"]
    fl= open('fixture.txt','a')
    fl.write(match +"\n")
    fl.close()
    return json.dumps(request.json)

@app.route('/show_fixture')
def show_fixture():
    team=[]
    data1=[]
    fl=open('fixture.txt')
    for i in fl:
        team=i.split()
        obj={
            "team1":team[0],
            "team2":team[1]
        }
        data1.append(obj)
    fl.close()
    return json.dumps({"data":data1})