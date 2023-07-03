/**
 * 
 */
var levels = [`\
###
#.#
# #
# #
# #
# #
#@#
###
`,`\
###
#.#
#$#
# #
# #
# #
#@#
###
`,`\
#####
#.  #
##$$#
## ##
#   #
#@  #
#####
`,`\
###
#.#
# ###
#$# #
#   #
#@###
###
`,`\
#####
# . #
#$$ #
#  $#
#$  #
#   #
# @ #
#####
`,`\
###########
#      $ .#
# ## ######
#x## #
# ## #
#x####
# #
#@#
###
`,`\
###
# #
# ###
#$ .#
#$###
# ##
#  #
# ##
#@#
###
`,`\
#########
#     $ #
#    $ .#
####$####
#  $$   #
#@      #
#########
`,`\
#########
# .$    #
# $$ $  #
####$####
#       #
#@      #
#########
`,`\
#######
###$###
###$# #
### @ #
# $ ###
###$###
###.###
#######
`,`\
       ###
       # #
######## #
#.$$$$ # #
#$$$ $$$@#
##########
`,`\
#####
##.$#
#$$$#
# #$#
# # #
# # #
#   #
#$@##
#####
`,`\
######
#@   #
#$# ##
###$##
###  #
#.$  #
######
`,`\
#######
#.$$  #
#$#$# #
#  $  #
# # # #
#    @#
#######
`,`\
###
# #
# #######
#@ $$$$.#
#########
`,`\
########
#  $   #
# # # ##
# $.$ #
# #$# #
#  @  #
#######
`,`\
###########
#@        #
##### #####
#   #   $$#
# ##### $ #
# #   $$# #
# #$# $## #
# # #$#.$ #
# # $ # # #
#  $#   # #
###########
`,`\
###########
#@       $#
##### #$# #
#   #   #$#
# ##### $ #
# #  $ $# #
# # ##$## #
#$  #$  # #
####$$### #
#  $$  $  .#
###########
`,`\
###########
#@        #
# ####### #
# #      $#
# ##$###$##
# #    $# #
# ### $ $ #
#   #$#$#$#
#$# $ $ # #
#  $  #  .#
###########
`,`\
###########
#@  #  $$ #
# # # #$# #
# # #   #$#
# ##### $$#
#     #$  #
##### $## #
# $ #$    #
# #$$$##$ #
#$$$     E#
###########
`,`\
###########
#@    #   #
##### # # #
#   #   #$#
# ### #$$ #
# #   #$  #
# #$#$$ # #
#$$ #$  # #
###$$ ### #
#  $$ #  E#
###########
`,`\
###########
#@        #
# ####$ $##
# #   #  $#
# ### ##$ #
# # #  $  #
# # ##$####
#    $#   #
####$$$ # #
#  $    #E#
###########
`,`\
###########
#@        #
##### # # #
#   # # #$#
# ###$#$$ #
#   #  $#$#
##$ # $$#$#
# # #$    #
# # $$##$ #
#  $  $$ E#
###########
`,`\
###########
#@  #     #
# ### ### #
# #  $#  $#
# ##### $##
#   #  $$ #
# $ #$$##$#
# #$#$    #
# ##$##$$ #
#  $     E#
###########
`,`\
###########
#@      # #
# ##### # #
#   # $ #$#
##### #$$ #
#   #  $# #
# ##$#$ # #
#   $$$   #
# # $$### #
# #$ $$  E#
###########
`,`\
###########
#@    # $ #
# ### $ # #
# # # # #$#
# # # # $ #
# # # $$# #
# # ##$$# #
# # #$  #$#
# # $ # # #
# #$  #  E#
###########
`,`\
###########
#@     $  #
# ####### #
# #   # $$#
# ### ##$##
#   #  $  #
# ####$$$ #
#    $  # #
# ##$## # #
#  $  #  E#
###########
`,`\
###########
#@      # #
##### # # #
#   # # #$#
# ### # $$#
# #   #$# #
# ### $ # #
# #  $# $ #
# # $###$ #
#  $# $  E#
###########
`,`\
###########
#@    #   #
# ### #$$ #
# # #$  #$#
# # ### $ #
# #$   $#$#
# ####$## #
# #  $    #
# $#$## # #
#  $  $ #E#
###########
`,`\
###########
#@    #   #
# ### # ###
# #   #  $#
# ####$ $$#
# #    $# #
# ###$$##$#
#    $#   #
####$$# # #
#  $$   #E#
###########
`,`\
###########
#@    #   #
##### $ # #
#   #   #$#
# ### ##$ #
# #   #$  #
# ####$ # #
# #  $# # #
# # $ # # #
#$ $#   #E#
###########
`,`\
###########
#@        #
# ####### #
# # #$   $#
### # ##$##
#   #  $  #
# ### $#$ #
# #  $#   #
# ##$## # #
#  $    #E#
###########
`,`\
###########
#@  #   #$#
# ### # # #
# #   $  $#
# ##$###$ #
#      $ $#
# ####$####
#$   $  $ #
####$#### #
#  $     E#
###########
`,`\
###########
#@     $  #
##### # ###
#   # #  $#
# ####$#$ #
#   $  $  #
### # $## #
# $ #$# # #
# # $ # # #
#  $  #  E#
###########
`,`\
###########
#@    # $ #
# ### $$#$#
#   #   #$#
######$ $ #
#   $ #$  #
# ### $## #
# #  $$  $#
#$##$## ###
#  $$    E#
###########
`,`\
###########
#@  #   $ #
# # # ### #
# # #   #$#
# ##$## $ #
#     #$# #
##### $ # #
#   #$# # #
# #$$ ### #
# #$     E#
###########
`,`\
###########
#@      # #
# ##### # #
# #     $$#
# ######$ #
#  $#  $  #
### # $## #
#   #$  # #
# ##$#$## #
#  $  $  E#
###########
`,`\
###########
#@      $ #
######### #
#   # $ #$#
# ### # $ #
#     #$  #
#####$$## #
#  $$$  # #
# $#$## $ #
#  $$ #  E#
###########
`,`\
###########
#@#       #
# # ##### #
# # #   #$#
# ### $ $ #
# #   $$# #
# # $ $## #
# # #$  # #
# # $## # #
#  $ $#  E#
###########
`,`\
###########
#@    #   #
# ### # # #
#   #   #$#
#######$$ #
#      $# #
# $ $#$##$#
# # #$ $  #
# # $ #####
# #$     E#
###########
`,`\
###########
#@  #     #
# # # $$# #
# # # #$$$#
# ####$ $##
# #$  #$  #
# # $ $ $ #
# $ #$# # #
###$$ ##$ #
#  $ $$  E#
###########
`,`\
###########
#@        #
##### # ###
#   #$#  $#
# ###$##$ #
# #    $  #
# #$#$$##$#
#    $#   #
####$#$ ###
#  $   $ E#
###########
`,`\
###########
#@    #   #
# ### # # #
# #  $# $$#
# #####$$$#
#   #$$$# #
### # $ # #
# # #$#   #
# $ $ ### #
#  $$ $  E#
###########
`,`\
###########
#@        #
# ####### #
# #   # $$#
# ### # $##
#   # #$# #
# #$# $ # #
# # #$#   #
# # $ #$# #
# #$  #  E#
###########
`,`\
###########
#@      #$#
# ##### #$#
#   #   #$#
####$ ##$$#
#   # #$  #
# ### $ $ #
#    $# # #
# ##$#### #
#  $ $   E#
###########
`,`\
###########
#@        #
##### $## #
#   # #  $#
# ##### $##
#     #$  #
##### $## #
#   #$  # #
# ##$## # #
# $$$    E#
###########
`,`\
###########
#@      # #
# ##### # #
#   # # #$#
##### # $ #
#   #  $# #
###$#$$## #
#   #$$$# #
# ##$##$# #
#  $     E#
###########
`,`\
###########
#@      # #
# ##### # #
# #     #$#
# ######$ #
#   #  $  #
###$#$$##$#
#   #$    #
# ##$ ### #
#  $  #  E#
###########
`,`\
###########
#@  #     #
# # # # # #
# # # # #$#
# ###$# $ #
#   # #$# #
### # $ ###
# # #$#   #
# # $#### #
#  $     E#
###########
`,`\
###########
#@       $#
##### ### #
#   #$$$#$#
# ####$ $##
#     #$  #
##### $## #
#   #$    #
# ##$##$# #
#  $     E#
###########
`,`\
###########
#@        #
##### ### #
#   # $  $#
# ### # $##
#   $ #$$ #
######$## #
#   #$ $  #
#$##$ #####
#  $     E#
###########
`,`\
###########
#@  #     #
# # ##$## #
# # #   $$#
# ### # $ #
# # $ #$  #
# # # $## #
# # #$#   #
# ##$$# ###
#  $  #  E#
###########
`,`\
###########
#@        #
# ####### #
# # #   #$#
# # #$$#$ #
#   #  $  #
####$ $####
#$  #$#   #
# ##$ #$# #
#  $    #E#
###########
`,`\
###########
#@     $  #
# ####### #
# #     #$#
# #####$$ #
#     #$# #
# ###$$ # #
# #  $$ #$#
# # $###$ #
#  $#    E#
###########
`,`\
###########
#@    #   #
# ### $ # #
# #   # #$#
# ####$#$ #
#  $   $# #
######$ # #
#   $$  # #
# $ $ ### #
# #$     E#
###########
`,`\
###########
#@      $ #
######### #
#   #    $#
# ### ##$ #
#     #$  #
######$ ###
#$   $ $# #
# ##$#### #
#  $   $ E#
###########
`,`\
#############
#@       $$ #
# ####### $ #
# #     #  $#
# ###$# ##$##
#     $  $  #
# ######$##$#
#      $  # #
# ####$##$# #
# #  $  #   #
# ##$$# #####
#  $       E#
#############
`,`\
#############
#@         $#
# #######$# #
# #   $ # $$#
# ###$# ##$ #
#     #$ $# #
### # ##$ ###
#   #  $$   #
# $###$#### #
#   #$   $  #
# # $ #######
# #$       E#
#############
`,`\
#############
#@        # #
# #######$# #
# #     # #$#
# ####$ # $ #
# #   # $$# #
# # # ##$## #
#   #$ $  # #
######$$# #$#
#    $  #   #
#$$#$ ##### #
#  $#      E#
#############
`,`\
#############
#@        $ #
# ##### $$# #
# #   # $$#$#
##### # # $ #
#    $# $$  #
# ##$## $####
# #   #$    #
# # #$$#### #
# # $$#   # #
# # $ # $ # #
#  $#   #  E#
#############
`,`\
#############
#@          #
# ##### ### #
# #   #   #$#
##### $$# $$#
#     #  $$$#
# #$### $####
#     #$$   #
##### $#### #
#   #$#   # #
# # $ #$$ # #
# $$   $#  E#
#############
`,`\
#############
#@          #
# ######### #
# #     #  $#
# ##### $ $##
#     #$#$  #
# ### # $####
# #   #$    #
# ####$#### #
# $  $  #$$ #
# ##$## # ###
#  $  #    E#
#############
`,`\
#############
#@      #   #
# ### ### # #
# # #     #$#
# # ### ##$ #
# #   # #$ $#
# ### # $ # #
#   # $$# # #
##### $ # # #
#    $# $$# #
# ##$#$## # #
#  $      #E#
#############
`,`\
#############
#@          #
# ######$## #
# # #      $#
# # # ####$##
# # $ $ $$ $#
# # ### $ # #
# #$ $ $# # #
# ####$#### #
#    $    $ #
####$###### #
#  $       E#
#############
`,`\
#############
#@#         #
# # ###$##$ #
# # # #$$ #$#
# ### # # $ #
# #    $#$  #
# # ####$####
#  $#  $ $  #
# ####$ ### #
# #  $# # $ #
# #$$ # # ###
#  $$   $  E#
#############
`,`\
#############
#@    #  $  #
# ### # ##$ #
# #   $ #  $#
# ##### ##$ #
# # #$   $# #
# # # ##$$###
# #    $#   #
# # $#$## $$#
# # #$  # $ #
# $#$$# ### #
#  $$ #    E#
#############
`,`\
#############
#@          #
# ###########
# #        $#
# ###$$$##$$#
#   #    $  #
# ##$ ##$####
#     #$    #
# ###$$ ###$#
#$$  $  $ # #
# $ $#### # #
#  $#$     E#
#############
`,`\
#############
#@#         #
# # ####### #
# # #   $  $#
# ### ####$##
#     # $$  #
# ##### $ $$#
#   #  $# # #
### ##$ # ###
# #  $# #   #
# ##$ ##### #
#  $       E#
#############
`,`\
#############
#@        # #
##### ### # #
#   #   #$ $#
# ####$ ##$ #
#   $ $ $$  #
###$$##$$ ###
#   $  $$   #
# ####$ $$#$#
#$$  $  $$# #
#$# $#$$### #
# #$   $$  E#
#############
`,`\
#############
#@  # #     #
# # # #$# #$#
# # #   #  $#
# ### ####$ #
#   # #  $  #
### ### $## #
# #   #$#   #
# ### $ ### #
#   #$#   # #
# ##$ ### # #
#  $      #E#
#############
`,`\
#############
#@  #   #$  #
# ### # # # #
# #   # # #$#
# #####$##$ #
#     # #$ $#
# # # # $ # #
# # # #$$ # #
### ##$#### #
#   #$      #
# ##$ $######
# $$ $     E#
#############
`,`\
#############
#@    #     #
# ### # ##$ #
# #   #   #$#
# ####$ # $##
#     # #$$ #
##### ##$## #
# $ $  $    #
# $$#$$####$#
# #  $  # $ #
# ##$#### ###
#  $       E#
#############
`,`\
#############
#@    #     #
# ### # #####
# #   $ #$ $#
# ##### # $ #
#   #$   $# #
### # ##$## #
#   #  $  # #
# ###$$#### #
#    $  #   #
###$$## # # #
#  $      #E#
#############
`,`\
#############
#@      $   #
##### ##### #
#   # #   #$#
# ### # # $ #
# #   #$#$  #
# ##### $$# #
# #    $#   #
# # ##$$# ###
# # #$    # #
# # $ ##### #
#  $#      E#
#############
`,`\
#############
#@    #   # #
# ### # # # #
# # #   # #$#
# # ##### $ #
# # #    $# #
# # # ##$## #
# #   #$#   #
# ###$$ # # #
#$   $#   # #
####$ ##### #
#  $    $  E#
#############
`,`\
#############
#@       $  #
# ######### #
# #    $#  $#
# ##### ##$##
# #   $ #$  #
# # #$# $$# #
#   # #$  # #
# ###$$#### #
# #  $$   # #
# #$$## # # #
#$#$    #  E#
#############
`,`\
#############
#@        $$#
# ######### #
# # #   #  $#
# # # # # $##
#   #$# #$  #
##### # $$# #
#  $  #$  $ #
# $#$#$#$ # #
#    $# # # #
####$ # $ # #
#  $    #  E#
#############
`,`\
#############
#@    # $   #
# ### #$### #
#   #   $  $#
######### $##
#       #$# #
# #$###$$ #$#
# #$ $ $# $ #
# # ##$ ### #
# $ #$$ #   #
# # $ #$# ###
#  $#      E#
#############
`,`\
#############
#@  #   #  $#
# ### # # #$#
# #   # # #$#
# ##### # $##
#     # #$  #
# # # # $$# #
# # # #$# # #
# # $#$ ### #
#$#$ $#     #
# #$$ ###$# #
#  $#$     E#
#############
`,`\
#############
#@          #
# ##### ##$##
# #   # #  $#
# ### $#$ $$#
#   #  $ $# #
# # ####$## #
# $ #  $  #$#
# # # $ ### #
# # #$#   # #
# ##$$### # #
#  $    #  E#
#############
`,`\
#############
#@#   #   $ #
# # # # $## #
# # # $ #  $#
# ####### $##
#       #$  #
# ######$## #
# #    $  # #
# # ##$ ### #
# #  $# #   #
# ##$ # # ###
#  $  #    E#
#############
`,`\
#############
#@      #$  #
# ##### ### #
# # # #    $#
# # # ####$ #
#   #    $$ #
##### ##$$# #
#   #  $# $ #
# ####$ #####
#    $# #   #
# ##$$# #$# #
#  $#      E#
#############
`,`\
#############
#@      #   #
# ### # # ###
# # # # #  $#
# # ### # $$#
# #   # #$# #
# ### $ $$# #
# #   #$  # #
# # #$$#$ # #
# #  $$   # #
# ##$###### #
#  $    $  E#
#############
`,`\
#############
#@  # #     #
# # # # # # #
# # # # $ #$#
# ### # # $##
# #   # #$  #
# # #$# $## #
# #   #$$ # #
# ##$ $ # # #
#   #$ $  # #
##$ $#$#### #
#  $$ $ $  E#
#############
`,`\
#############
#@    #     #
# ### ##### #
# # #      $#
# # ###$##$ #
#   # # $$# #
#####$# $ # #
#   #  $# # #
# # # $## #$#
# # #$# #   #
# # $$# #####
# #$ $     E#
#############
`,`\
#############
#@#   #     #
# # # ### ###
# # #   #  $#
# ##### #$$ #
#   $  $#$  #
# ######$ # #
# $ #  $# $ #
### # $ $ # #
# # #$#   # #
#$# $ $$### #
#  $  #    E#
#############
`,`\
#############
#@          #
#######$# # #
#   #   $ #$#
# ### ####$$#
# #   #  $# #
# ##$$# $## #
# #   $$  # #
#$# ##$ # #$#
# # #$ $#$  #
# # $ ##$####
#  $#$     E#
#############
`,`\
#############
#@    # #   #
# ### # # # #
#   # #   #$#
#####$# ##$ #
#   # #$ $# #
# # $ ##$## #
# # #$#$    #
# # $ $ ##$ #
# # #$$ #$# #
# ##$#### # #
#  $ $$    E#
#############
`,`\
#############
#@  #     # #
# # # ### # #
# # #   #  $#
# ### # $#$##
# #   # #$  #
# ###$# $ # #
# #   #$  # #
#$# # $#$## #
# # #$    # #
# # $##$# # #
#  $# $    E#
#############
`,`\
#############
#@    # #   #
# ### #$# #$#
#   # # $ #$#
##### #$# $ #
# #   #$ $# #
# #$### $## #
# $ $  $#   #
# # ##$#$ # #
# #  $   $# #
#$$#$###### #
#  $   $   E#
#############
`,`\
#############
#@  #       #
# # # #######
# # # $$#  $#
# ##### # $ #
# #  $#$ $# #
# # # ##$## #
#   # $$  # #
###$# $$#$# #
# #  $# #   #
# # $$# ### #
#  $ $$ #  E#
#############
`,`\
#############
#@    #   $ #
# ### ### #$#
#   #   # #$#
####### # $##
#       #$  #
# ######$## #
# #    $  #$#
#$# $$$## # #
# # $$  # # #
# # $ ### # #
#  $#  $   E#
#############
`,`\
#############
#@        # #
# #####$# # #
#   #   #  $#
##### ####$ #
#        $  #
# ###$##$####
#   #  $    #
### # $#### #
#  $#$    # #
# ##$###### #
#  $       E#
#############
`,`\
#############
#@      $   #
# ######### #
# # #      $#
# # # ####$##
# # #$#  $# #
# # #$# $ # #
#   #  $#   #
######$#### #
#    $    # #
# ##$ ##$## #
#  $#   $  E#
#############
`,`\
#############
#@        $ #
# ######### #
# # #     #$#
# # ### # $ #
# # #   #$# #
# # # ##$## #
#   #  $$ $$#
#####$$## # #
#   #$# #   #
# # $ # #####
# #$       E#
#############
`,`\
#############
#@#     $   #
# # ###$# ###
# # # # #  $#
# ###$#$##$ #
#     #  $# #
##### ##$ #$#
# $ $ #$  # #
# ####$ ### #
# #  $#     #
# #$$ ##$## #
#  $$$ $$  E#
#############
`];

