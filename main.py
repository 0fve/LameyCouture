import os, sys
from fastapi import FastAPI, Request, HTTPException
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

# # # # # # # # # #   SQL   # # # # # # # # # #
from sqlalchemy import text
from sqlalchemy.exc import ProgrammingError


app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")
app.mount("/asessts", StaticFiles(directory="asessts"), name="asessts")

templates = Jinja2Templates(directory="templates")

@app.get("/measure")
async def measure(request: Request):
    return templates.TemplateResponse("measure.html",{"request":request, "title":"واجهة الموظفة"} )

@app.get("/factory")
async def factory(request: Request):
    return templates.TemplateResponse("factoryView.html",{"request":request, "title":"واجهة المصنع"} )

@app.get("/seller")
async def factory(request: Request):
    return templates.TemplateResponse("sellerInterface.html",{"request":request, "title":"واجهة البيع"} )